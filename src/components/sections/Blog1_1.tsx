const Blog1_1 = () => {
  return (
    <div>
      <div className='fixed right-0 bottom-0 m-6 p-2 bg-white inline-flex items-center rounded-full z-10'>
        <button
          className='bg-gray-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='gray'
        ></button>
        <button
          className='bg-red-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='red'
        ></button>
        <button
          className='bg-orange-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='orange'
        ></button>
        <button
          className='bg-yellow-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='yellow'
        ></button>
        <button
          className='bg-green-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='green'
        ></button>
        <button
          className='bg-teal-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='teal'
        ></button>
        <button
          className='bg-blue-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='blue'
        ></button>
        <button
          className='bg-indigo-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='indigo'
        ></button>
        <button
          className='bg-purple-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none'
          theme-button='purple'
        ></button>
        <button
          className='bg-pink-700 w-4 h-4 rounded-full outline-none focus:outline-none'
          theme-button='pink'
        ></button>
      </div>
      <div className='flex flex-col min-h-screen'>
        <div className='bg-gray-800'>
          <div className='p-5 border-b border-gray-700 flex items-center justify-between'>
            <button className='border border-gray-600 text-gray-600 px-4 py-2 rounded-full inline-flex items-center hover:bg-gray-600 hover:text-white'>
              <svg
                className='w-4 h-4 fill-current mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <path d='M30.276 1.722C29.168.611 27.69 0 26.121 0s-3.045.61-4.154 1.72L4.294 19.291c-.105.104-.185.229-.235.367l-4 11c-.129.355-.046.756.215 1.031.192.202.455.311.726.311.098 0 .196-.014.293-.044l9.949-3.052c.156-.047.298-.133.414-.248l18.621-18.621C31.389 8.926 32 7.448 32 5.878c-.001-1.569-.611-3.046-1.724-4.156zM10.092 27.165l-3.724 1.144c-.217-.637-.555-1.201-1.016-1.662-.401-.399-.866-.709-1.356-.961L5.7 21H8v2c0 .553.447 1 1 1h1.765l-.673 3.165zm14.72-14.494L12.628 24.855l.35-1.647c.062-.296-.012-.603-.202-.837-.19-.235-.475-.371-.776-.371h-2v-2c0-.552-.448-1-1-1H7.422L19.315 7.175l.012.011c.732-.733 1.707-1.136 2.742-1.136s2.011.403 2.742 1.136 1.138 1.707 1.138 2.743c0 1.036-.403 2.009-1.137 2.742zm4.05-4.05l-.932.933c-.09-1.429-.683-2.761-1.703-3.782-1.021-1.022-2.354-1.614-3.787-1.703l.938-.931.002-.002C24.11 2.403 25.085 2 26.121 2s2.01.403 2.741 1.136C29.596 3.869 30 4.843 30 5.878c0 1.037-.402 2.011-1.138 2.743zm-6.569-.328l-10 10c-.391.391-.391 1.023 0 1.414.194.195.451.293.707.293s.511-.098.707-.293l10-10c.391-.391.391-1.023 0-1.414-.392-.391-1.023-.391-1.414 0z' />
              </svg>
              Write Article
            </button>
            <svg
              className='w-10 h-10'
              viewBox='0 0 40 40'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='20'
                cy='20'
                r='16'
                stroke='#FFF'
                stroke-width='8'
                fill='none'
                fill-rule='evenodd'
              />
            </svg>
            <div className='inline-flex items-center text-gray-600'>
              <svg
                className='w-5 h-5 fill-current mr-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 250.313 250.313'
              >
                <path
                  d='M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                />
              </svg>
              <svg
                className='w-5 h-5 fill-current mr-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 510 510'
              >
                <path d='M255 510c28.05 0 51-22.95 51-51H204c0 28.05 22.95 51 51 51zm165.75-153V216.75c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V56.1c-73.95 17.85-127.5 81.6-127.5 160.65V357l-51 51v25.5h433.5V408l-51-51z' />
              </svg>
              <a className='cursor-pointer w-8 h-8 rounded-full overflow-hidden'>
                <img src='https://randomuser.me/api/portraits/men/28.jpg' />
              </a>
            </div>
          </div>
          <div className='container mx-auto'>
            <div className='flex flex-wrap py-8 flex-col sm:flex-row'>
              <div className='w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0'>
                <img src='https://randomuser.me/api/portraits/women/14.jpg' />
              </div>
              <div className='sm:pl-10 sm:pt-4 flex-1'>
                <div className='flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6'>
                  <div className='flex flex-wrap md:w-auto w-full md:mb-0 mb-4'>
                    <h2 className='text-white text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0'>
                      Phoebe Caulfield
                    </h2>
                    <div className='flex sm:w-auto w-full sm:justify-start justify-center'>
                      <span className='text-gray-600 mr-4 tracking-wider'>
                        <span className='text-gray-400'>120</span> Followers
                      </span>
                      <span className='text-gray-600 mr-4 tracking-wider'>
                        <span className='text-gray-400'>45</span> Following
                      </span>
                    </div>
                    <div className='flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center'>
                      <a
                        href='#'
                        className='text-gray-600 mr-3 hover:text-white'
                      >
                        <svg
                          className='w-4 h-4 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 96.124 96.123'
                        >
                          <path d='M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z' />
                        </svg>
                      </a>
                      <a
                        href='#'
                        className='text-gray-600 mr-3 hover:text-white'
                      >
                        <svg
                          className='w-4 h-4 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 612 612'
                        >
                          <path d='M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z' />
                        </svg>
                      </a>
                      <a href='#' className='text-gray-600 hover:text-white'>
                        <svg
                          className='w-4 h-4 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 169.063 169.063'
                        >
                          <path d='M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z' />
                          <path d='M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z' />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <button className='border border-gray-700 md:ml-auto mr-4 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0'>
                    <svg
                      className='fill-current w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path d='M497 80.333h-65.334V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v65.333h-65.332c-8.284 0-15 6.716-15 15s6.716 15 15 15h65.332v65.334c0 8.284 6.716 15 15 15s15-6.716 15-15v-65.334H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM175.666 321.334C78.804 321.334 0 400.138 0 497c0 8.284 6.716 15 15 15h321.334c8.284 0 15-6.716 15-15 0-96.862-78.805-175.666-175.668-175.666zM175.666 64.267c-52.566 0-95.332 42.767-95.332 95.334s42.766 95.333 95.332 95.333c52.567 0 95.334-42.766 95.334-95.333s-42.767-95.334-95.334-95.334z' />
                    </svg>
                  </button>
                  <button className='border border-gray-700 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0'>
                    <svg
                      className='w-5 h-5 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 511.626 511.626'
                    >
                      <path d='M49.106 178.729c6.472 4.567 25.981 18.131 58.528 40.685 32.548 22.554 57.482 39.92 74.803 52.099 1.903 1.335 5.946 4.237 12.131 8.71 6.186 4.476 11.326 8.093 15.416 10.852 4.093 2.758 9.041 5.852 14.849 9.277 5.806 3.422 11.279 5.996 16.418 7.7 5.14 1.718 9.898 2.569 14.275 2.569h.575c4.377 0 9.137-.852 14.277-2.569 5.137-1.704 10.615-4.281 16.416-7.7 5.804-3.429 10.752-6.52 14.845-9.277 4.093-2.759 9.229-6.376 15.417-10.852 6.184-4.477 10.232-7.375 12.135-8.71 17.508-12.179 62.051-43.11 133.615-92.79 13.894-9.703 25.502-21.411 34.827-35.116 9.332-13.699 13.993-28.07 13.993-43.105 0-12.564-4.523-23.319-13.565-32.264-9.041-8.947-19.749-13.418-32.117-13.418H45.679c-14.655 0-25.933 4.948-33.832 14.844C3.949 79.562 0 91.934 0 106.779c0 11.991 5.236 24.985 15.703 38.974 10.466 13.99 21.604 24.983 33.403 32.976z' />
                      <path d='M483.072 209.275c-62.424 42.251-109.824 75.087-142.177 98.501-10.849 7.991-19.65 14.229-26.409 18.699-6.759 4.473-15.748 9.041-26.98 13.702-11.228 4.668-21.692 6.995-31.401 6.995h-.578c-9.707 0-20.177-2.327-31.405-6.995-11.228-4.661-20.223-9.229-26.98-13.702-6.755-4.47-15.559-10.708-26.407-18.699-25.697-18.842-72.995-51.68-141.896-98.501C17.987 202.047 8.375 193.762 0 184.437v226.685c0 12.57 4.471 23.319 13.418 32.265 8.945 8.949 19.701 13.422 32.264 13.422h420.266c12.56 0 23.315-4.473 32.261-13.422 8.949-8.949 13.418-19.694 13.418-32.265V184.437c-8.186 9.132-17.7 17.417-28.555 24.838z' />
                    </svg>
                  </button>
                </div>
                <p className='text-gray-500 leading-normal px-4 sm:px-0'>
                  Businesses often become known today through effective
                  marketing. The marketing may be in the form of a regular news
                  item or half column society news in the Sunday newspaper. The
                  marketing may be in the form of a heart to heart.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center border-t border-gray-700 py-5'>
            <a href='#' className='text-white mx-5'>
              Articles
            </a>
            <a href='#' className='text-gray-600 mx-5 hover:text-gray-500'>
              Recommends
            </a>
            <a href='#' className='text-gray-600 mx-5 hover:text-gray-500'>
              Subscriptions
            </a>
          </div>
        </div>
        <div className='bg-gray-900 pt-12 pb-6 flex-1'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap md:-mx-3'>
              <div className='md:w-1/2 px-3 mb-6 w-full'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-2/6'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80'
                    />
                  </div>
                  <div className='w-4/6 p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/5.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Luke Nunez</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 px-3 mb-6 w-full'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-2/6'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    />
                  </div>
                  <div className='w-4/6 p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/8.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Jonathan Mithu</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 px-3 mb-6 w-full'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-2/6'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    />
                  </div>
                  <div className='w-4/6 p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/11.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Chris Sonne</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 px-3 mb-6 w-full'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-2/6'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80'
                    />
                  </div>
                  <div className='w-4/6 p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/33.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Mike Olle</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:w-1/4 md:w-1/2 px-3 mb-6'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-full'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    />
                  </div>
                  <div className='w-full p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/22.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Chris Sonne</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/4 md:w-1/2 px-3 mb-6'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-full'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80'
                    />
                  </div>
                  <div className='w-full p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/23.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Chris Sonne</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/4 md:w-1/2 px-3 mb-6'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-full'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1565388161858-5ae922cbfde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    />
                  </div>
                  <div className='w-full p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/25.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Chris Sonne</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/4 md:w-1/2 px-3 mb-6'>
                <div className='flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded'>
                  <div className='w-full'>
                    <img
                      className='object-cover h-full w-full'
                      src='https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2195&q=80'
                    />
                  </div>
                  <div className='w-full p-5'>
                    <h2 className='text-white leading-normal text-lg'>
                      How To Boost Your Traffic Of Your Blog And Destroy The
                      Competition
                    </h2>
                    <div className='flex flex-wrap justify-between items-center mt-6'>
                      <div className='inline-flex items-center'>
                        <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                          <img src='https://randomuser.me/api/portraits/men/29.jpg' />
                        </div>
                        <div className='flex-1 pl-2'>
                          <h2 className='text-white mb-1'>Chris Sonne</h2>
                          <p className='text-white opacity-50 text-xs'>
                            May 18
                          </p>
                        </div>
                      </div>
                      <span className='text-white opacity-50'>
                        <svg
                          className='fill-current w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 459 459'
                        >
                          <path d='M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button className='border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white'>
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog1_1
