# Use official K6 image
FROM loadimpact/k6:latest

# Copy test script to container
COPY test.js /test.js

# Führe den K6-Test aus
CMD ["run", "/test.js"]