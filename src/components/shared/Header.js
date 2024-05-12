import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover, PopoverButton, Transition, PopoverPanel, MenuButton, Menu, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200'>
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />

                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11"
                />
            </div>
            <div className="flex items-center gap-2 mr-4">
                <Popover className="relative">
                    <PopoverButton className="p-4 hover:bg-gray-200 active:outline-none rounded-sm outline-none">
                        <HiOutlineChatAlt fontSize={24} />
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                            anchor="bottom"
                            className="absolute right-0 z-10 mt-2.5 w-80"
                        >
                            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-4">
                                <strong className="text-gray-700 font-medium">Messages</strong>
                                <div>This is the Messages panel</div>
                            </div>
                        </PopoverPanel>
                    </Transition>
                </Popover>
                <Popover className="relative">
                    <PopoverButton className="p-4 hover:bg-gray-200 active:outline-none rounded-sm outline-none">
                        <HiOutlineBell fontSize={24} />
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                            anchor="bottom"
                            className="absolute right-0 z-10 mt-2.5 w-80"
                        >
                            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-4">
                                <strong className="text-gray-700 font-medium">Notification</strong>
                                <div>This is the notification panel</div>
                            </div>
                        </PopoverPanel>
                    </Transition>
                </Popover>



                <Menu>
                    <MenuButton className="hover:ring-2 ring-neutral-400 rounded-full hover:outline-none focus:outline-none">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center "
                            style={{ backgroundImage: 'url(https://source.unsplash.com/80x80?face)' }}>

                        </div>
                    </MenuButton>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-75"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <MenuItems
                            anchor="bottom end"
                            className="bg-white flex flex-col w-48 origin-top-right absolute mt-2 rounded-sm shadow-md cursor-pion"
                        >
                            <MenuItem className="hover:bg-neutral-200 p-2">
                                <button onClick={() => navigate("/profile")}>
                                    Your Profile
                                </button>
                            </MenuItem>
                            <MenuItem className="hover:bg-neutral-200 p-2">
                                <button onClick={() => navigate("/settings")}>
                                    Your settings
                                </button>
                            </MenuItem>
                            <MenuItem className="hover:bg-neutral-200 p-2">
                                <button onClick={() => navigate("/signout")}>
                                    Signout
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </Transition>
                </Menu>

            </div>
        </div>
    )
}
