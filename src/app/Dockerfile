FROM python:3.9.2

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "uvicorn", "app:app", "--reload", "--host=0.0.0.0"]