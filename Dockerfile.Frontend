FROM bitnami/nginx

COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf

COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]