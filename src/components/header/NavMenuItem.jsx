import React from 'react'

export default function NavMenuItem({href,title}) {
  return (
      <li>
          <a
              href={href}
              className="hover:bg-slate-100 hover:text-primary w-full px-3 py-1 block font-[500] text-slate-500"
          >
              {title}
          </a>
      </li>
  );
}
