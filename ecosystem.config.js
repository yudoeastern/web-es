module.exports = {
  apps: [{
    name: 'easternstack-web',
    cwd: '/home/easternstack/apps/easternstack-web',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3005,
    },
    instances: 1,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    error_file: '/home/easternstack/logs/easternstack-web/error.log',
    out_file: '/home/easternstack/logs/easternstack-web/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
  }]
};
