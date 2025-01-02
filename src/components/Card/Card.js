import React from "react";

function Card ({post, clickImage}) {
    
    return(
        <div className="w-full bg-white shadow-md overflow-hidden rounded-lg">
            <div className=" relative aspect-square">
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => clickImage(post)}
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-pink-700 truncate">{post.title}</h2>
                    <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{post.description}</p>
                <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1">
                            <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAehJREFUSEvV1MvLTWEYBfDfF5kiRK6lMFCSgUsuSWJKMVBymbiM/CtGLhlhQlEMzMj9UlIMFCkRBi6lpAwIe329R+ds+5yz++pL3jqdwbvftZ71POtZI8b5jIwzvn9GsBvbsQq/cAfncako3oH81jJa5ANcwLl6R+oKZuAstvZpXYgmYWWf+yvYj4+d+26CCbiNNfiAg7iHH9iAU5heHgbgAG5hYrk/gWkFYyN+5ttugkM4js9Yhre1KufiamnZZryr3c+v2voEU7AXZ+oEj7AC+3B6jO6KqpO4iajoUfC9yE0lb8ZIsBjP8R6z+hHMa2hPW74leFbeB6dHwX2sxp7ipLag3d8dxjFcxrY6wZFqQEfxqfL78oYhDiOcg6eYXP3vLHvRoyD+jooM+gXWl14OA879zGLPRdW7a9VixmWjp75oGUwckGG1JUnl1xHwDDg7kz1qJOhUkwVbWM3jZXlQ93znfcDvYkEBX1da/Ed1v7CL5CiJK16XzKmTdIOn9/F95tdzBqVpYiHZ00TSDf64ioxNJQH+mtewuA7JDSztUpLsibq05WEZ6Jd+ThhGkHdTC0ny6VVJ09nFcVvwdZDN2hB0SJK0UZITEyTSB4I32XRQMVFyEWnHLnxrsyBtFbTBavzm/yf4DTBuXhlUYzevAAAAAElFTkSuQmCC"/>
                            <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1">
                            <img className="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQZJREFUSEvt1T1KBEEQhuFnQ6+gILiCP8cwNDLdIxgYiiCCsQaaiGCw5/AIHkAFI0XB0FAwEXVHbOkd7V566TFy0u6qt/qrqm96Ov56HeeXA2zgACuFRdxgG+dNXA7wiLnC5OH6HRYnAUpzr+II61+Bn8XX7kEftylAFc3xngJU0TwHGCMXNKAdl3zBPyBM5J9IdI+F9h7U6sE1dn6zilqAsQGMN7lzwAPmW/MfCljDGZYS+/Gtefs8fkFjFYdYji7N4hiDzOJdYjdongPEZ0GulxF0ZuTvz9jHCV4LtjzppgHwhiH28FSSONxN2XUDuMAmrqZJPAmwhdPIGadm1P7h/Cikc8AHqrk7GaSdRPsAAAAASUVORK5CYII="/>
                            <span>{post.comments.length}</span>
                        </button>
                    </div>
                </div>
                {/* {expandedComments === post.id && (
                  <div className="mt-4 space-y-2">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="bg-gray-100 p-2 rounded">
                        <p className="font-semibold">{comment.user}</p>
                        <p>{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )} */}
            </div>
        </div>
    )
}

export default Card;