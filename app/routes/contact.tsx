import { json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import {
  AiOutlineMail as EnvelopeIcon,
  AiOutlinePhone as PhoneIcon,
  AiFillTwitterSquare as TwitterIcon,
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
} from "react-icons/ai";
import IconLink from "~/components/IconLink";
import Input from "~/components/Input";
import Label from "~/components/Label";
import Section from "~/components/Section";
import Textarea from "~/components/Textarea";
import Alert from "~/components/Alert";

import type { ActionArgs, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Todd Goates | Contact",
  description: "Different ways to get in touch with Todd Goates",
});

function validateName(name: FormDataEntryValue | string | null) {
  if (typeof name === "string" && name.length === 0) {
    return "Please enter your name";
  }

  if (typeof name === 'string' && name.match(/https?:\/\//)) {
    return "Sorry, I'm not accepting names with links in them at this time";
  }
}

function validateEmail(email: FormDataEntryValue | string | null) {
  if (typeof email === "string") {
    if (email.length === 0) {
      return "Please enter your email";
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,13})+$/.test(email)) {
      return "Please enter a valid email";
    }
  }

  return;
}

function validateMessage(message: FormDataEntryValue | string | null) {
  if (typeof message === "string" && message.length < 2) {
    return "Please enter a message";
  }

  if (typeof message === "string" && message.match(/https?:\/\//)) {
    return "Sorry, I'm not accepting messages with links at this time";
  }
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  const phone = ""; // Needed for existing API

  const fieldErrors = {
    name: validateName(name),
    email: validateEmail(email),
    message: validateMessage(message),
  };

  const fields = { name, email, message };
  if (Object.values(fieldErrors).some(Boolean)) {
    return json({
      fieldErrors,
      fields,
    });
  }

  const body = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };

  const response = await fetch("https://api.toddgoates.com/contact", config);
  const data = await response.json();
  return data;
};

export default function Projects() {
  const transition = useTransition();
  const actionData = useActionData();
  const successfulSubmission = actionData?.statusCode === 200;

  return (
    <>
      <Section>
        <>
          <h2 className="mb-12 text-4xl text-center">Get in touch</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-8 text-lg">
                Want to collaborate together on project? Feel free to get in
                touch by email or text or fill out the form below... or connect
                with me on social media... or don't. It's your choice.
              </p>
              {successfulSubmission ? (
                <Alert type="success">
                  <h3 className="mb-4 text-2xl font-bold">Success!</h3>
                  <p className="text-lg">
                    Your message has been sent successfully! I'll get in touch
                    with you shortly.
                  </p>
                </Alert>
              ) : (
                <Form method="post">
                  <fieldset
                    className="flex flex-col gap-4"
                    disabled={transition.state === "submitting"}
                  >
                    <div className="sm:flex sm:gap-8">
                      <div className="w-full">
                        <Label htmlFor="name">What's your name?</Label>
                        <Input name="name" required />
                        {actionData?.fieldErrors?.name ? (
                          <p className="text-red-500">
                            {actionData.fieldErrors.name}
                          </p>
                        ) : (
                          <p>&nbsp;</p>
                        )}
                      </div>
                      <div className="w-full">
                        <Label htmlFor="email">What's your email?</Label>
                        <Input type="email" name="email" required />
                        {actionData?.fieldErrors?.email ? (
                          <p className="text-red-500">
                            {actionData.fieldErrors.email}
                          </p>
                        ) : (
                          <p>&nbsp;</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">
                        What would you like to say?
                      </Label>
                      <Textarea name="message" required></Textarea>
                      {actionData?.fieldErrors?.message ? (
                        <p className="text-red-500">
                          {actionData.fieldErrors.message}
                        </p>
                      ) : (
                        <p>&nbsp;</p>
                      )}
                    </div>
                    <div className="text-left">
                      <button
                        type="submit"
                        className={`px-3 py-2 text-lg font-semibold border-2 border-orange-500 rounded-lg text-white bg-orange-500 hover:bg-orange-600`}
                      >
                        {transition.state === "submitting"
                          ? "Sending Message..."
                          : "Send Message"}
                      </button>
                    </div>
                  </fieldset>
                </Form>
              )}
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4 p-5 bg-white shadow-lg">
                <IconLink href="mailto:todd@toddgoates.com">
                  <EnvelopeIcon /> todd@toddgoates.com
                </IconLink>
                <IconLink href="tel:18013199420">
                  <PhoneIcon /> 801 319 9420
                </IconLink>
                <IconLink
                  href="https://twitter.com/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon /> Twitter
                </IconLink>
                <IconLink
                  href="https://github.com/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon /> GitHub
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/toddgoates"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon /> LinkedIn
                </IconLink>
              </div>
            </div>
          </div>
        </>
      </Section>
    </>
  );
}
