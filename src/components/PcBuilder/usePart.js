import { useState, useEffect } from 'react';
import axios from 'axios';

const usePart = (partType) => {
  const [partList, setPartList] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/parts/${partType}`);
        setPartList(response.data);
      } catch (err) {
        console.error(`Failed to fetch parts: ${err}`);
      }
    };
  
    fetchParts();
  }, [partType]);

  const onPartSelect = (part) => {
    setSelectedPart(part);
  };

  return { partList, selectedPart, onPartSelect };
};

export default usePart;
