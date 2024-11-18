import React from 'react'

interface UserListProps{
    user:any
}

const UserList:React.FC<UserListProps> = ({user}) => {
  return (
    <div key={user.id} className="madhu mt-[18px]">
            <div className="bg-white p-2 text-black shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg">
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-[42px] bg-[#f2adad] w-[63px] text-center rounded-full">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-bold text-[22px] font-medium text-gray-900 truncate dark:text-black">{user.name}</p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.mobile}</p>
                      </div>
                      <div className={`text-center  text-black block w-full p-2 rounded-[40px] text-[15px] max-w-[180px] font-normal ${user.status === 'Active' ? 'bg-gradient-to-r from-[#6F89D6] to-[#243B81]' : 'bg-gradient-to-r from-yellow-300 to-white'}`}>
                        {user.status === 'Active' ? 'Accepted' : 'Accepted Journey Not Started'}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default UserList