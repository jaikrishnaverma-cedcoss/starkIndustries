import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { dataHubType } from '../Types/types';

const useIndex = () => {
    const dataHub: dataHubType = useSelector((state: dataHubType) => state);
    let index=-1
        if (dataHub.session) {
          dataHub.users.forEach((x, i) => {
            if (dataHub.session!=='' && dataHub.session.id == x.id) {
              index=i
            }
          });
        }

  return index
}

export default useIndex