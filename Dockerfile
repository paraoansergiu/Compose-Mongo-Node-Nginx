# getting base image
FROM ubuntu

MAINTAINER sergiu paraoan <paraoansergiu@yahoo.com>

RUN apt-get update

CMD ["echo","Run gets executed from the docker image"]