import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ArrowIconSVG from "./icons/arrowIconSVG";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const SideModal = ({ isOpen, onClose, title, children }: SideModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed bottom-0 right-0 top-0 h-full w-full flex-col border-l border-neutral-200 bg-white/85 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white sm:w-[430px]">
            <div className="flex border-b border-gray-300 p-3">
              <div onClick={onClose} className="flex justify-center items-center rotate-90 cursor-pointer">
                <ArrowIconSVG />
              </div>
              <Dialog.Title className="flex items-center justify-center w-full uppercase font-semibold">
                {title}
              </Dialog.Title>
            </div>
            
            {children}
          </Dialog.Panel>
        </Transition.Child>
        
      </Dialog>
    </Transition>
  );
}

export default SideModal;