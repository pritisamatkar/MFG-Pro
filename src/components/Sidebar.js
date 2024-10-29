import React from "react";

const Sidebar = () =>{
    return(
        <div className="h-screen flex">
            {/**Sidebar */}
            <div className="w-[120px] h-screen bg-white border border-r border-[#dee3f4] drop-shadow">
                {/**logo */}
                <div className="flex items-center justify-center py-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7864 11.8206C21.7864 11.2747 22.2289 10.8322 22.7748 10.8322H31.0116C31.5575 10.8322 32 11.2747 32 11.8206V20.0574C32 20.6033 31.5575 21.0458 31.0116 21.0458H22.7748C22.2289 21.0458 21.7864 20.6033 21.7864 20.0574V11.8206Z" fill="#0085CA"/>
                        <path d="M10.9138 22.6932C10.9138 22.1473 11.3563 21.7048 11.9022 21.7048H20.139C20.6849 21.7048 21.1274 22.1473 21.1274 22.6932V30.93C21.1274 31.4759 20.6849 31.9184 20.139 31.9184H11.9022C11.3563 31.9184 10.9138 31.4759 10.9138 30.93V22.6932Z" fill="#EC1C2E"/>
                        <path d="M21.0862 5.45289C21.0862 2.44143 18.6439 0 15.6314 0C13.0403 0 10.8716 1.806 10.3153 4.22737C10.294 4.30718 10.2752 4.39005 10.2621 4.46681C10.1731 5.00106 10.0531 5.54142 9.96369 6.07611C9.787 7.13459 9.6103 8.19351 9.43361 9.25198C9.28265 10.1561 9.13083 11.0641 8.85117 11.9368C7.90401 14.8907 5.51668 17.2436 2.73975 18.6278C4.95693 18.9479 7.19287 18.7539 9.34417 18.1293C11.4876 17.507 14.0935 16.5863 15.9224 15.2108C17.507 14.0193 18.4969 12.9573 19.3223 11.6149C20.2595 10.0907 21.0212 7.94186 21.0718 5.84584C21.081 5.71587 21.0862 5.58503 21.0862 5.45289Z" fill="#FFCC00"/>
                        <path d="M6.52798 13.5853C7.00352 12.8073 7.72121 11.7436 7.72644 10.7688C4.76104 10.9468 0.208452 11.317 0.0020915 15.1092C-0.0184137 15.4855 0.100255 17.1507 0.879452 17.2143C3.12848 17.3975 4.83477 15.9736 6.52798 13.5853Z" fill="#FFCC00"/>
                    </svg>
                </div>
                {/**sidenav menu */}
                <div className="flex items-center justify-center mt-4 text-sm font-medium w-full">
                   
                    <div className="relative DQ py-2 m-2 hover:bg-[#0369dd] hover:text-white rounded-t-lg w-full">
                        <button className="flex flex-col items-center justify-center m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>


                         Digital Quality
                         </button>
                          {/**Line options on hover */}
                         <ul className="absolute invisible DQ-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                            {/**FCP 1*/}
                            <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">

                                 FCP1 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                  {/**FCP sub-MENU */}
                                <ul className="absolute invisible fcp-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                                    <li className="leading-normal relative pae hover:bg-[#0369dd] hover:text-white rounded">
                                      <a className="flex items-center justify-between gap-4 p-2">
                                      PAE
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                        <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        </svg>
                                      </a>
                                        {/**PAE-submenu */}
                                        <ul className="absolute invisible pae-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                PAE Dashboard
                                                   
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                PAE FCP
                                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="leading-normal relative lab hover:bg-[#0369dd] hover:text-white rounded">
                                        <a className="flex items-center justify-between gap-4 p-2">
                                            LAB
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <ul className="absolute invisible lab-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                Lab Dashboard
                                                   
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                Test History
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                Seasoning Dashboard
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                +All
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                +Seasoning
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                               Oil
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                               Moisture
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                +Dwell
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                               Temparature
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                             Packing Room
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                               Bulk Density
                                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="leading-normal relative weaklink hover:bg-[#0369dd] hover:text-white rounded">
                                        <a className="flex items-center justify-between gap-4 p-2">
                                           Weak Link
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <ul className="absolute invisible weaklink-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                WeakLink Dashboard
                                                   
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                                Weak link Single Page
                                                    
                                                </a>
                                            </li>
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                             Quality Wall Report
                                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="leading-normal relative food hover:bg-[#0369dd] hover:text-white rounded">
                                        <a className="flex items-center justify-between gap-4 p-2">
                                         Food Safety
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <ul className="absolute invisible food-hover:visible left-full top-0 w-44 py-2 bg-white text-black rounded border border-gray">
                                            <li className="leading-normal hover:bg-[#0369dd] hover:text-white rounded">
                                                <a className="flex items-center justify-between gap-4 p-2">
                                               Thermal Preventive
                                                   
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                             {/**FCC1 */}
                             <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">
                                    FCC1
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                
                            </li>
                            <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">
                                    PC1
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                
                            </li>
                            <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">
                                    TC1
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                
                            </li>
                            <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">
                                    TC2
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                
                            </li>
                            <li className="relative fcp hover:bg-[#0369dd] hover:text-white rounded">
                                <a className="flex items-center justify-between p-2">
                                    TC3
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>

                                </a>
                                
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;