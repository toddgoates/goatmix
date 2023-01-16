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

import type { ActionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  const phone = "";

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
            <div className="lg:col-span-2">
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
                    className="flex flex-col gap-8"
                    disabled={transition.state === "submitting"}
                  >
                    <div className="flex gap-8">
                      <div className="w-full">
                        <Label htmlFor="name" text="What's your name?" />
                        <Input name="name" required />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="email" text="What's your email?" />
                        <Input type="email" name="email" required />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="message"
                        text="What would you like to say?"
                      />
                      <Textarea name="message" required></Textarea>
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
                <IconLink link="mailto:todd@toddgoates.com">
                  <EnvelopeIcon /> todd@toddgoates.com
                </IconLink>
                <IconLink link="tel:18013199420">
                  <PhoneIcon /> 801 319 9420
                </IconLink>
                <IconLink link="https://twitter.com/toddgoates">
                  <TwitterIcon /> Twitter
                </IconLink>
                <IconLink link="https://github.com/toddgoates">
                  <GithubIcon /> GitHub
                </IconLink>
                <IconLink link="https://www.linkedin.com/in/toddgoates">
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
