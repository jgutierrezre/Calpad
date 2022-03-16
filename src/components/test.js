import React, { useState, useEffect } from 'react';

function useFriendStatus(algo) {
    const [isOnline, setIsOnline] = useState(null);
  
    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }

  
      handleStatusChange({isOnline: algo})
      return () => {
        handleStatusChange({isOnline: false})
      };
    });
  
    return (
        <li style={{ color: isOnline ? 'green' : 'red' }}>
          test
        </li>
      );
  }


export default function Test() {
    const isOnline = useFriendStatus(false);

    return (
        isOnline
    );
}