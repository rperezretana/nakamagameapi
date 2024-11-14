# Use the base image from Nakama to start with
FROM heroiclabs/nakama:3.22.0

# Add your custom Nakama console and any additional configuration
# COPY . /nakama

# Set work directory
WORKDIR /nakama

# Expose Nakama ports
EXPOSE 7349 7350 7351
