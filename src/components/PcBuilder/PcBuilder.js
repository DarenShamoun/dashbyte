import React from 'react';
import styles from './pc-builder.module.css'; // Import the styles
import usePart from './usePart';
import PartSelect from './PartSelect';

function PcBuilder() {
  const cpu = usePart('CPU');
  const gpu = usePart('GPU');
  const ram = usePart('RAM');
  const ssd = usePart('SSD');
  const hdd = usePart('HDD');
  const usb = usePart('USB');
  const selectedParts = [cpu.selectedPart, gpu.selectedPart, ram.selectedPart, ssd.selectedPart, hdd.selectedPart, usb.selectedPart];

  return (
    <div className={styles.pcBuilder}>
      <h1>PC Builder Page</h1>
      <p>Select parts to build your PC:</p>
      <PartSelect partType="CPU" partData={cpu} />
      <PartSelect partType="GPU" partData={gpu} />
      <PartSelect partType="RAM" partData={ram} />
      <PartSelect partType="SSD" partData={ssd} />
      <PartSelect partType="HDD" partData={hdd} />
      <PartSelect partType="USB" partData={usb} />
      <h2>Selected Parts:</h2>
      <ul>
        {selectedParts.map(part => part && (
          <li key={part._id}>
            {part.Brand} {part.Model} - ${part.Price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcBuilder;
