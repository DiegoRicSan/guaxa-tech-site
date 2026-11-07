# Site estático simples, sem Node.js, banco ou serviços extras.
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css script.js config.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
