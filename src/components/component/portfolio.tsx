import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { MailIcon } from "lucide-react";

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-secondary px-4 py-3 shadow sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="#"
            className="text-lg font-bold text-foreground"
            prefetch={false}
          >
            DevJerry
          </Link>
          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="#about-me"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Projects
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="ml-auto sm:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Jerry Sean Huynh
                </h1>
                <p className="text-lg text-muted-foreground">
                  Software Engineer
                </p>
                <p>&#128222;(817)-564-1829</p>
                <p>&#128205; Dallas, Tx</p>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Tawanhua"
                    className="text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <GithubIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/jerry-huynh/"
                    className="text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="mailto:jerry.sean.huynh@gmail.com"
                    className="text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <MailIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div>
                  <a
                    href="/files/Jerry-Huynh-Resume.pdf"
                    target="_black"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/profile.jpg"
                  alt="Jerry Huynh"
                  className="w-64 h-64 lg:w-96 lg:h-96 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about-me" className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              About Me
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-muted-foreground">
                  I'm a software engineer passionate about building
                  high-quality, user-friendly applications. I have experience
                  with a variety of technologies, including React, Spring Boot,
                  Node.js, and Python, with Java being one of my strongest
                  languages. I’m always eager to learn new skills.
                </p>
                <p className="mt-4 text-muted-foreground">
                  In my free time, I enjoy experimenting with new technologies
                  and playing PC games. I'm a strong believer in the power of
                  collaboration and communication to continuously learn and grow
                  on solving complex problems.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-lg font-bold">Languages</h3>
                  <ul className="text-muted-foreground pl-4">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Kotlin</li>
                    <li>Dart</li>
                  </ul>
                  <h3 className="text-lg font-bold">Database</h3>
                  <ul className="text-muted-foreground pl-4">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-lg font-bold">Tools & Frameworks</h3>
                  <ul className="text-muted-foreground pl-4">
                    <li>ReactJS</li>
                    <li>Spring Boot</li>
                    <li>IntelliJ</li>
                    <li>Node.js</li>
                    <li>VSCode</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="bg-background py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
            <div className="grid gap-4">
              <Card className="py-4">
                <div className="flex items-center">
                  <div className="p-4 flex-shrink-0">
                    <img
                      src="/images/project1.png"
                      alt="TrackMaster CRUD"
                      className="w-40 h-40 lg:w-60 lg:h-60 rounded-full border-2 border-gray-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      TrackMaster CRUD
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Tech Stack:</strong> Java, Spring Boot, MySQL,
                      React, JavaScript, Bootstrap
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        A Fullstack web application that helps users manage
                        their tasks.
                      </li>
                    </ul>
                  </CardContent>
                </div>
                <div className="p-4">
                  <a
                    href="https://github.com/Tawanhua/trackmaster-client"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700 mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Client
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Tawanhua/trackmaster-server"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Server
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
              <Card className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="p-4 flex-shrink-0">
                    <img
                      src="/images/project2.png"
                      alt="Project 2"
                      className="w-40 h-40 lg:w-60 lg:h-60 rounded-full border-2 border-gray-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      VerifyIDNow
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Tech Stack:</strong> Flutter, Node.js, Express.js,
                      MySQL Workbench
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        Developed a mobile facial recognition app for service
                        industry employees.
                      </li>
                      <li>
                        Used by technicians or other services that go on-site to
                        sign in and verify their employment with ABC Company.
                      </li>
                      <li>
                        Additional credentials were used to complete employee
                        verification.
                      </li>
                    </ul>
                  </CardContent>
                </div>
                <div className="p-4">
                  <a
                    href="https://github.com/Tawanhua/VerifyIDNow"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                </div>
              </Card>

              <Card className="py-4">
                <div className="flex items-center">
                  <div className="p-4 flex-shrink-0">
                    <img
                      src="/images/project3.png"
                      alt="Project 2"
                      className="w-40 h-40 lg:w-60 lg:h-60 rounded-full border-2 border-gray-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      Chatting
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Tech Stack:</strong> Flutter, Firebase Auth, Cloud
                      Firestore
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        A mobile chatting app developed with Flutter with user
                        login using Firebase Auth to create and store user
                        accounts.
                      </li>
                      <li>
                        Create group chats to communicate between friends.
                      </li>
                    </ul>
                  </CardContent>
                </div>
                <div className="p-4">
                  <a
                    href="https://github.com/Tawanhua/chatting"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
              <Card className="py-4">
                <div className="flex items-center">
                  <div className="p-4 flex-shrink-0">
                    <img
                      src="/placeholder.svg"
                      alt="Project 2"
                      className="w-40 h-40 lg:w-60 lg:h-60 rounded-full border-2 border-gray-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      PlaceHolder (Project WIP)
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Tech Stack:</strong>
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li></li>
                    </ul>
                  </CardContent>
                </div>
                <div className="p-4">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700 mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded inline-flex items-center shadow-md border border-blue-500 hover:border-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      fill="#000000"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M472.178,34.62H39.822C17.864,34.62,0,52.484,0,74.442c0,17.955,0,345.234,0,363.116 c0,21.958,17.864,39.822,39.822,39.822h432.356c21.958,0,39.822-17.864,39.822-39.822c0-17.89,0-345.167,0-363.116 C512,52.484,494.136,34.62,472.178,34.62z M477.867,437.557c0,3.137-2.552,5.689-5.689,5.689H39.822 c-3.137,0-5.689-2.552-5.689-5.689V153.838h443.733V437.557z M477.867,119.705H34.133V74.442c0-3.137,2.552-5.689,5.689-5.689 h432.356c3.137,0,5.689,2.552,5.689,5.689V119.705z"></path>
                      <circle cx="71.805" cy="94.23" r="12.836"></circle>
                      <circle cx="112.959" cy="94.23" r="12.836"></circle>
                      <circle cx="154.112" cy="94.23" r="12.836"></circle>
                      <path d="M81.581,334.442c4.44,13.701,22.872,16.101,30.636,3.9l10.454-16.432l10.454,16.432 c7.744,12.169,26.195,9.801,30.636-3.9l19.857-61.278c2.906-8.967-2.008-18.591-10.975-21.497 c-8.971-2.906-18.591,2.009-21.497,10.975l-8.681,26.791l-5.393-8.478c-6.695-10.52-22.094-10.538-28.801,0l-5.392,8.478 l-8.681-26.79c-2.906-8.966-12.526-13.882-21.497-10.975c-8.967,2.906-13.88,12.529-10.975,21.496L81.581,334.442z"></path>
                      <path d="M214.911,334.442c4.446,13.72,22.905,16.052,30.636,3.9L256,321.911l10.454,16.432c7.762,12.2,26.196,9.8,30.636-3.9 l19.855-61.278c2.906-8.967-2.008-18.59-10.975-21.496c-8.974-2.907-18.591,2.008-21.497,10.975l-8.681,26.79l-5.392-8.478 c-6.695-10.52-22.094-10.538-28.801,0l-5.392,8.478l-8.681-26.79c-2.905-8.966-12.527-13.882-21.496-10.975 c-8.967,2.906-13.88,12.529-10.975,21.496L214.911,334.442z"></path>
                      <path d="M348.241,334.442c4.446,13.72,22.905,16.051,30.636,3.9l10.454-16.432l10.454,16.432c7.762,12.2,26.195,9.8,30.636-3.9 l19.855-61.278c2.906-8.967-2.008-18.59-10.975-21.496c-8.973-2.907-18.591,2.008-21.496,10.975l-8.681,26.79l-5.392-8.478 c-6.695-10.52-22.095-10.538-28.801,0l-5.393,8.478l-8.681-26.791c-2.906-8.966-12.531-13.881-21.497-10.975 c-8.967,2.906-13.88,12.53-10.974,21.497L348.241,334.442z"></path>
                    </svg>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-secondary px-4 py-6 shadow sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Jerry Huynh. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Tawanhua"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jerry-huynh/"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:jerry.sean.huynh@gmail.com"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <MailIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
