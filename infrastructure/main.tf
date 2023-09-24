# main.tf
provider "aws" {
  region = "us-east-1" # Modify to your desired AWS region
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
