export default function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:pb-8">
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col gap-3 sm:flex-row">
              <i className="hover:text-white cursor-pointer ri-facebook-line text-gray-500"></i>
              <i className="hover:text-white cursor-pointer ri-mail-line text-gray-500"></i>
              <i className="hover:text-white cursor-pointer ri-instagram-line text-gray-500"></i>
              <i className="hover:text-white cursor-pointer ri-linkedin-line text-gray-500"></i>
              <i className="hover:text-white cursor-pointer ri-github-line text-gray-500"></i>
            </div>
            <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
        </div>
    </div>
  );
}
