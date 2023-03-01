import BookmarkIcon from "@/components/icons/bookmark-icon";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import Logo from "@/components/icons/logo";
import MastercraftLogo from "@/components/icons/mastercraft-logo";
import ImageSwitch from "@/components/image-switch";
import Section from "@/components/section";

import heroImageDesktop from "/public/images/image-hero-desktop.jpg";
import heroImageMobile from "/public/images/image-hero-mobile.jpg";

export default function Home() {
  return (
    <div className="dh-full relative">
      <nav className="absolute flex w-full items-center justify-between p-6">
        <Logo className="h-5 w-32" />

        <button>
          <HamburgerIcon />
        </button>
      </nav>

      <ImageSwitch
        mobileSrc={heroImageMobile}
        desktopSrc={heroImageDesktop}
        alt=""
      />

      <main className="space-y-8">
        <Section className="-mt-14 flex flex-col items-center space-y-6 text-center">
          <MastercraftLogo className="-mt-16" />

          <h2 className="text-xl font-bold capitalize leading-6">
            Mastercraft Bamboo
            <br />
            Monitor Riser
          </h2>

          <p className="text-neutral-100">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <div className="flex w-full gap-2">
            <button className="flex-1 rounded-full bg-primary-100 font-bold text-white">
              Back this project
            </button>
            <button className="flex w-max flex-none items-center justify-center rounded-full">
              <BookmarkIcon />
            </button>
          </div>
        </Section>

        <Section className="flex flex-col items-center space-y-6 text-center">
          <div>
            <div className="mb-2 text-3xl font-bold">$89,914</div>
            <div className="text-neutral-100">of $100,000 backed</div>
          </div>

          <div className="h-0.5 w-24 bg-neutral-100/20"></div>

          <div>
            <div className="mb-2 text-3xl font-bold">5,007</div>
            <div className="text-neutral-100">total backers</div>
          </div>

          <div className="h-0.5 w-24 bg-neutral-100/20"></div>

          <div>
            <div className="mb-2 text-3xl font-bold">56</div>
            <div className="text-neutral-100">days left</div>
          </div>

          <div className="h-3 w-full rounded-full bg-neutral-100/10">
            <div className="h-full w-4/5 rounded-full bg-primary-100"></div>
          </div>
        </Section>

        <Section className="space-y-6">
          <h3 className="text-lg font-bold">About this project</h3>
          <p className="text-neutral-100">
            The Mastercraft Bamboo Monitor Riser is a study and stylish platform
            that elevates your screen to a more comfortable viewing height.
            Placing your monitor at eye level has the potential to improve your
            posture and make you more comfortable whilea t work, helping you
            stay focused on the task at hand.
          </p>
          <p className="text-neutral-100">
            Featuring artisan craftsmanship, the simplicity of desgin creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <div className="space-y-6 rounded-lg border border-neutral-100/20 p-6">
            <div>
              <div className="font-bold">Bamboo Stand</div>
              <div className="font-bold text-primary-100">
                Pledge $25 or more
              </div>
            </div>
            <p className="text-neutral-100">
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you&apos;ll be
              added to a special Back member list.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">101</span>
              <span className="text-neutral-100">left</span>
            </div>
            <button className="rounded-full bg-primary-100 py-3 px-8 font-bold text-white">
              Select Reward
            </button>
          </div>

          <div className="space-y-6 rounded-lg border border-neutral-100/20 p-6">
            <div>
              <div className="font-bold">Black Edition Stand</div>
              <div className="font-bold text-primary-100">
                Pledge $75 or more
              </div>
            </div>
            <p className="text-neutral-100">
              You get a Black Special Edition computer stand and a personal
              thank you. You&apos;ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">64</span>
              <span className="text-neutral-100">left</span>
            </div>
            <button className="rounded-full bg-primary-100 py-3 px-8 font-bold text-white">
              Select Reward
            </button>
          </div>

          <div className="space-y-6 rounded-lg border border-neutral-100/20 p-6 opacity-50">
            <div>
              <div className="font-bold">Mahogany Special Edition</div>
              <div className="font-bold text-primary-100">
                Pledge $200 or more
              </div>
            </div>
            <p className="text-neutral-100">
              You get two Special Edition mahogany stands, a Backer T-Shirt, and
              a personal thank you. You&apos;ll be added to our Bakcer member
              list. Shipping is included.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">0</span>
              <span className="text-neutral-100">left</span>
            </div>
            <button className="rounded-full bg-neutral-100 py-3 px-8 font-bold text-white">
              Out of Stock
            </button>
          </div>
        </Section>
      </main>
    </div>
  );
}
