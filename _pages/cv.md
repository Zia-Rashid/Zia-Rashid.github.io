---
layout: archive
title: "CV"
permalink: /
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* BS/MS in Cybersecurity, Rochester Institute of Technology (RIT), Expected Graduation: May 2028
  * GPA: 3.84 | Dean's List (Fall 2024, Spring 2025)
  * Member of RITSEC (Cybersecurity Club – Vulnerability Research, Reversing, Penetration Testing)
  * RIT Wrestling Affiliate

* Advanced Regents Diploma with Honors & Pre-University Program, Cicero North Syracuse High School / Syracuse University (STEP), Graduated June 2024
  * Weighted GPA: 99.4/100
  * Wrestling Team Captain

Work experience
======
* May 2025 – Aug 2025: Penetration Testing Intern
  * Coalfire
  * Performed real-world cyberattacks to uncover security flaws
  * Assisted in ethical hacking engagements, vulnerability exploitation, and reporting
  * Contributed to securing networks and applications against advanced persistent threats

Research & Projects
======
* June 2025 – Aug 2025: AI Integrated IDE Security Assessment
  * Conducted comprehensive security assessment of AI-integrated IDEs
  * Rigorously tested for prompt injection, editor-specific vulnerabilities, and inappropriate MCP server access
  * Discovered and documented various vulnerabilities including:
    - Arbitrary File Exfiltration
    - File System Embedding into System Prompt
    - Lack of Request Throttling (DoS vulnerability)
    - Dozens of successful Prompt Injection Attempts
  * Detailed findings and methodology available in full write-up

* Feb 2025 – June 2025: Pwn College V8 Quarterly Quiz
  * Completed pwn.college V8 Quarterly Quiz (Username: ziarashid)
  * Learned V8 internals including HeapObjects, Maps, Turbofan structure
  * Explored compiler architecture including Turbofan's sea of nodes, feedback vectors, typing
  * Studied V8 sandbox fundamentals including pointer compression cage, trusted pointer tables, code pointer tables
  * Mastered key exploitation concepts including FakeObject and AddrOf construction and utilization

* Nov 2024 – Present: Compiler & Browser Research
  * Implemented custom programming language with LLVM backend for compiler research
  * Studied LLVM IR creation and optimization mechanisms, gaining experience in multiple LLVM passes
  * Experimented with JavaScript's V8 engine for exploitation and compiler research
  * Studied Chromium codebase and completed custom V8 CTF challenges

* Aug 2024 – Dec 2024: Kernel and OS for Fuzzing & Vulnerability Research
  * Built minimalistic operating system and custom kernel designed for fuzz testing with LibAFL's QEMU mode
  * Developed specialized fuzzing harness to detect vulnerabilities in Google's KVMCTF
  * Focused on hypervisor security, guest-to-host escape detection, and virtualized environment weaknesses

Competitions
======
* CTF Competitions: Created and solved various challenges with 'Squid Proxy Lovers' and '[:](SLICES)'
  * Google CTF 2025: 2nd Place
  * DEFCON 2025 Quals: 10th Place

* Red/Blue Team Competitions: Competed in defensive cybersecurity events
  * Hivestorm 2024 (University of Texas San Antonio)
  * UB Lockdown (University of Buffalo)
  * IRSEC (RIT)
  * Focused on network defense, incident response, and threat mitigation

Skills
======
* Programming Languages: C++, C, LLVM, JavaScript, Python, x86_64 Assembly, Java, SQL
* Tools & Technologies: LLVM, V8, Turbolizer, IDA, LibAFL, pwntools, BurpSuite, Gen-AI
* Security Research: Vulnerability research, penetration testing, reverse engineering, fuzzing
* Compiler Security: LLVM IR optimization, instruction selection, IR transformations
* Browser Exploitation: V8 engine internals, sandbox bypass techniques, JavaScript exploitation

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
  
Service and leadership
======
* RITSEC Cybersecurity Club Member
* RIT Wrestling Affiliate
* High School Wrestling Team Captain
