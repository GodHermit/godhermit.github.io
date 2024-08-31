'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react';
import {
  CakeIcon,
  CalendarIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SendHorizonalIcon,
  SendIcon,
} from 'lucide-react';
import { useMemo } from 'react';

const BIRTHDAY = new Date('06 Nov 2003');

const iconClassnames =
  'text-default-300 w-4 h-4 sm:w-[1.375rem] sm:h-[1.375rem]';

export default function HomePage() {
  const years = useMemo(() => {
    return new Date(Date.now() - BIRTHDAY.getTime()).getUTCFullYear() - 1970;
  }, []);

  const isBirthday = useMemo(() => {
    return (
      new Date().getMonth() === BIRTHDAY.getMonth() &&
      new Date().getDate() === BIRTHDAY.getDate()
    );
  }, []);

  return (
    <Card className="relative z-10 w-full mx-4 max-w-max">
      <CardHeader className="flex items-center gap-3 px-3 pt-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-2xl font-bold">
            Hi! I'm Oleh Proidakov 🌹
          </h1>
          <p className="flex items-center gap-1 text-default-300 text-sm sm:text-base">
            Frontend Developer
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="grid grid-cols-[auto,1fr] gap-y-4 gap-x-4 sm:gap-x-6 text-default-300">
        <b className="flex items-center gap-2 sm:gap-3">
          <CalendarIcon className={iconClassnames} /> Age:
        </b>{' '}
        <p className="flex items-baseline gap-2 text-foreground col-span-2 -mt-3 sm:mt-0 pl-6 sm:pl-0 sm:col-span-1">
          {years}
          {isBirthday && (
            <CakeIcon width={20} height={20} className="translate-y-0.5" />
          )}
        </p>
        <Divider className="col-span-2 w-auto -mx-3" />
        <b className="flex items-center gap-2 sm:gap-3">
          <MailIcon className={iconClassnames} /> Email:
        </b>{' '}
        <Link
          href="mailto:oleh.proidakov@gmail.com"
          isExternal
          showAnchorIcon
          color="foreground"
          className="col-span-2 -mt-3 sm:mt-0 pl-6 sm:pl-0 sm:col-span-1"
        >
          oleh.proidakov@gmail.com
        </Link>
        <Divider className="col-span-2 w-auto -mx-3" />
        <b className="flex items-center gap-2 sm:gap-3">
          <GithubIcon className={iconClassnames} /> GitHub:
        </b>{' '}
        <Link
          href="https://github.com/GodHermit"
          isExternal
          showAnchorIcon
          color="foreground"
          className="col-span-2 -mt-3 sm:mt-0 pl-6 sm:pl-0 sm:col-span-1"
        >
          @GodHermit
        </Link>
        <b className="flex items-center gap-2 sm:gap-3">
          <LinkedinIcon className={iconClassnames} /> LinkedIn:
        </b>{' '}
        <Link
          href="https://www.linkedin.com/in/oleh-proidakov/"
          isExternal
          showAnchorIcon
          color="foreground"
          className="col-span-2 -mt-3 sm:mt-0 pl-6 sm:pl-0 sm:col-span-1"
        >
          in/oleh-proidakov
        </Link>
        <b className="flex items-center gap-2 sm:gap-3">
          <SendIcon className={iconClassnames} /> Telegram:
        </b>{' '}
        <Link
          href="https://t.me/GodHermit"
          isExternal
          showAnchorIcon
          color="foreground"
          className="col-span-2 -mt-3 sm:mt-0 pl-6 sm:pl-0 sm:col-span-1"
        >
          @GodHermit
        </Link>
      </CardBody>
      <CardFooter>
        <Button
          as={Link}
          variant="bordered"
          className="w-full"
          fullWidth
          href="https://tally.so/r/wQdPQk"
          target="_blank"
          startContent={<MailIcon width={18} height={18} />}
        >
          Contact now!
        </Button>
      </CardFooter>
    </Card>
  );
}
