"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);



  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
      console.log("{}",providers);
    };
    setUpProviders();
  }, []);
  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2vflex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width="30"
          height="30"
        />
        <p className="logo_text ml-2">Promptopia</p>
      </Link>
      {console.log(providers)}
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <>
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                <span>Create Prompt</span>
              </Link>
              <button className="outline_btn" onClick={signOut}>
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden center relative">
        {session?.user ? (
          <>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => {
                setToggleDropdown((prev) => {
                  return !prev;
                });
              }}
            />
            {toggleDropdown && (
              <div className="flex-col">
                <div>
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                </div>
                <div>
                  <Link
                    href="/create-prompts"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;




 