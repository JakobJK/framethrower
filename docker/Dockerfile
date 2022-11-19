FROM node:lts

RUN set -ex; \
  # Install inotify-tools so webpack can respond to file-system events.
  apt-get update; \
  apt-get install -y --no-install-recommends inotify-tools; \
  apt-get install -y ffmpeg; \
  # Install the wait-for-it command to /usr/bin.
  git clone https://github.com/vishnubob/wait-for-it /tmp/wait-for-it; \
  mv /tmp/wait-for-it/wait-for-it.sh /usr/bin/wait-for-it; \
  chmod +x /usr/bin/wait-for-it; \
  # Clean up to reduce the image size.
  rm -rf /tmp/wait-for-it /var/lib/apt/lists/*;