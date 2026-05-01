FROM alpine:3.19

ARG PB_VERSION=0.36.7

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    wget

# Download PocketBase
RUN wget -O /tmp/pb.zip \
    "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" \
    && unzip /tmp/pb.zip -d /pb \
    && rm /tmp/pb.zip

# Copy migrations and hooks (paths relative to project root)
COPY apps/pocketbase/pb_migrations/ /pb/pb_migrations/
COPY apps/pocketbase/pb_hooks/ /pb/pb_hooks/

EXPOSE 8090

VOLUME /pb/pb_data

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb/pb_data", "--migrationsDir=/pb/pb_migrations", "--hooksDir=/pb/pb_hooks"]
