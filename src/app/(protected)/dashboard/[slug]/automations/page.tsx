import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/create-automation";
import GradientButton from "@/components/global/gradient-button";
import { Check } from "lucide-react";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
          <div>
            <h1 className="text-2xl font-semibold">Upgrade to Pro</h1>
            <p className="text-text-secondary text-sm mb-2">
              Focus on Content Creation and let us take care of rest!
            </p>
            <div className="mt-6">
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#92BAC6] to-[#948AD7] bg-clip-text text-transparent">
                S
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#948AD7] to-[#924FE0] bg-clip-text text-transparent">
                m
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#924FE0] to-[#C83DD2] bg-clip-text text-transparent">
                a
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#C83DD2] to-[#CC5BB5] bg-clip-text text-transparent">
                r
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#CC5BB5] to-[#c850b0] bg-clip-text text-transparent">
                t
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#92BAC6] to-[#948AD7] bg-clip-text text-transparent">
                {" "}
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#df9c60] to-[#c850b0] bg-clip-text text-transparent">
                A
              </h2>
              <h2 className="text-4xl font-bold inline bg-gradient-to-r from-[#ee9086] to-[#D59E98] bg-clip-text text-transparent">
                I
              </h2>
            </div>
            <h2 className="text-2xl mt-4 font-semibold mb-6">
              $99.99<span className="text-sm">/month</span>
            </h2>
            <GradientButton
              type="BUTTON"
              className="w-full bg-transparent text-white rounded-full"
            >
              Upgrade
            </GradientButton>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active mt-6">
          <div>
            <h2 className="text-xl mt-5">Automations</h2>
            <p className="text-text-secondary">
              Your live automations will show here.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    Direct traffic towards website
                  </h3>
                  <p className="text-text-secondary text-sm">
                    October 5th 2024
                  </p>
                </div>
                <Check color="blue" className="bg-[#222021] rounded-full" />
              </div>
            ))}
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default Page;
