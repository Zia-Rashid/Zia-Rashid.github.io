#!/usr/bin/env python3
"""Extract cursor frames from Windows .ani (animated cursor) files."""

import struct
import sys
from pathlib import Path

def read_ani_file(ani_path):
    """Parse .ani file and extract embedded .cur frames."""
    with open(ani_path, 'rb') as f:
        data = f.read()
    
    # ANI files are RIFF format
    if data[:4] != b'RIFF':
        raise ValueError("Not a valid RIFF file")
    
    # Find LIST chunks containing icon data
    frames = []
    pos = 12  # Skip RIFF header
    
    while pos < len(data) - 8:
        chunk_id = data[pos:pos+4]
        chunk_size = struct.unpack('<I', data[pos+4:pos+8])[0]
        
        if chunk_id == b'LIST':
            list_type = data[pos+8:pos+12]
            if list_type == b'fram':
                # This LIST contains icon frames
                frame_pos = pos + 12
                while frame_pos < pos + 8 + chunk_size:
                    frame_chunk_id = data[frame_pos:frame_pos+4]
                    frame_chunk_size = struct.unpack('<I', data[frame_pos+4:frame_pos+8])[0]
                    
                    if frame_chunk_id == b'icon':
                        # Extract the icon data
                        icon_data = data[frame_pos+8:frame_pos+8+frame_chunk_size]
                        frames.append(icon_data)
                    
                    frame_pos += 8 + frame_chunk_size
                    if frame_chunk_size % 2:  # RIFF chunks are word-aligned
                        frame_pos += 1
        
        pos += 8 + chunk_size
        if chunk_size % 2:  # RIFF chunks are word-aligned
            pos += 1
    
    return frames

def main():
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <ani_file>")
        sys.exit(1)
    
    ani_path = Path(sys.argv[1])
    if not ani_path.exists():
        print(f"Error: {ani_path} not found")
        sys.exit(1)
    
    frames = read_ani_file(ani_path)
    
    if not frames:
        print(f"No frames found in {ani_path}")
        sys.exit(1)
    
    # Save frames as .cur files
    base_name = ani_path.stem
    for i, frame_data in enumerate(frames):
        output_path = ani_path.parent / f"{base_name}_frame{i:02d}.cur"
        with open(output_path, 'wb') as f:
            f.write(frame_data)
        print(f"Extracted: {output_path}")
    
    print(f"Total frames extracted: {len(frames)}")

if __name__ == '__main__':
    main()
