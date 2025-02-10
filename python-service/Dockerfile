# Use official Python image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy source code
COPY . .

# Expose port
EXPOSE 6000

# Start the service
CMD ["python", "app.py"]
