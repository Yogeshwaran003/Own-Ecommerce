import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function DialogDemo() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log("Component Mounted");
    console.log("Name:", name);
    console.log("Username:", username);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Saved changes:", { name, username });
  };

  return (
    <div className=" p-3 flex justify-around bg-transparent">
      <div>
        <img src="images/logo4.png" alt="" className="h-[100px] w-[]" />
      </div>
      <div>
        <Button className="bg-transparent m-3 p-5 text-lg ">Home</Button>
        <Button className="bg-transparent m-3 p-5 text-lg ">About</Button>
        <Button className="bg-transparent m-3 p-5 text-lg ">Contact</Button>
        <Button className="bg-transparent m-3 p-5 text-lg ">Product</Button>

      -</div>
      {/* login btn */}
      <div className="flex">
        <div className="m-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-[rgba(255,255,255,0.6)]">LOG-IN</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Welcome Back</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="Username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="col-span-3"
                      type="password"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Continue</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {/* Sign-in button */}
        <div className="m-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className='bg-[rgba(255,255,255,0.6)]'>SIGN-IN</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Welcome to Skull</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                      type="email"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="col-span-3"
                      type="password"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Continue</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
