import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { randomNameGenerator } from '../../utils/helpers';
import socket from '../../utils/socket';

import { actions } from '../../slice';

const index = () => {
  const dispatch = useDispatch();
  const [tocall, setTocall] = useState();
  const username = useSelector((state) => state.username);
  useEffect(() => {
    if (!username) {
      dispatch(actions.setUsername({ username: randomNameGenerator() }));
    } else {
      socket.emit('vc::auth', { username });
    }
  }, [username]);

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

      <div id="home" className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

        <div className="p-4 md:p-12 text-center lg:text-center">

          <h1 className="text-xl font-bold pt-8 lg:pt-0">
            Welcome to callme.js
          </h1>

          <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-green-500 opacity-25" />

          <div className="p-4 md:p-12 text-center lg:text-center">

            Your nickname is :
            <h2 id="my-username" className="text-l font-bold pt-6 lg:pt-0">
              {username}
            </h2>
            <div className="p-4 md:p-12 text-center lg:text-center">
              Person to call:
              <br />
              <input
                type="text"
                placeholder="Type here"
                className="font-bold px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-2/5 pr-10"
                onChange={(e) => setTocall(e.target.value)}
              />
              &nbsp;
              <Link
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to={`/call/${tocall}`}
              >
                Go
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default index;
