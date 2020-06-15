---
title: Kill port on MacOS
tags:
  - mac
  - kill
  - ports
# emoji: 👋
# link: https://zander.wtf
---

```bash
sudo lsof -i :3001
kill -9 <PID>
```

If the backend development server is playing silly buggers with nodemon and React.js