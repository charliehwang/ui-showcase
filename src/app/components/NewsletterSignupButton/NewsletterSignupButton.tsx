import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { ExpandableButtonCard } from "@/components/ExpandableButtonCard/ExpandableButtonCard";
import { useExpandableButtonCardStore } from "@/components/ExpandableButtonCard/useExpandableButtonCardStore";
import { motion } from "framer-motion";
import React from "react";
import { Input } from "@/components/Input/Input";
import { Title } from "@/components/Title/Title";
import { Paragraph } from "@/components/Paragraph/Paragraph";

type Props = {};

const NewsletterSignupButton = (props: Props) => {
  const { isExpanded, setIsExpanded } = useExpandableButtonCardStore();

  return (
    <ExpandableButtonCard
      cta={
        <Button
          as={motion.div}
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          }
          layoutId="expandable"
          // onClick={() => setIsExpanded(!isExpanded)}
          onClick={() => {
            console.log("clicked");
            // setIsExpanded(!isExpanded);
            setIsExpanded(true);
          }}
        >
          Subscribe
        </Button>
      }
    >
      <Card
        as={motion.div}
        className="rounded-xl expandable-contents bg-gray-900 absolute top-0 left-0 flex flex-col items-center justify-center p-8 overflow-hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          // scaleY: 1,
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          // scaleY: 0,
          opacity: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <form action="#">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <Title>Sign up for our newsletter</Title>
              <Paragraph>
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </Paragraph>
            </div>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <Input
                id="email"
                label="Email address"
                placeholder="Enter your email"
                type="email"
                required
                icon={
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                }
              />
            </div>

            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>

            <div className="flex justify-end">
              <Button
                className={
                  "bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                }
                // layoutId={isExpanded ? "expandable" : ""}
                layoutId="expandable"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                Enter email
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </ExpandableButtonCard>
  );
};

export { NewsletterSignupButton };
