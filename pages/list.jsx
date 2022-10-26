export default function List() {
  return (
    <div className='container my-6 min-h-screen grow'>
      <h1 className='text-3xl my-3'>Verkefni tekin til skoðunar</h1>
      <ul>
        <li>
          {' '}
          <a href='https://kolvidur.is/' className='text-blue-700'>
            Kolviður (Iceland Carbon Fund)
          </a>
        </li>
        <li>
          <a href='https://kolefnisbru.is/' className='text-blue-700'>
            Kolefnisbrúin
          </a>
        </li>
        <li>
          <a
            href='https://www.plantatreeiniceland.is/'
            className='text-blue-700'>
            Plant a Tree in Iceland{' '}
          </a>
        </li>
        <li>
          <a href='https://www.surefni.is/' className='text-blue-700'>
            Súrefni – íslensk kolefnisjöfnun
          </a>
        </li>
        <li>
          <a href='https://www.carbelfs.com/' className='text-blue-700'>
            Skógálfar (Carb Elfs)
          </a>
        </li>
        <li>
          <a
            href='https://tryneutral.com/programs/iceland'
            className='text-blue-700'>
            Neutral (Iceland)
          </a>
        </li>
        <li>
          <a
            href='https://onetreeplanted.org/products/iceland'
            className='text-blue-700'>
            One Tree Planted (Iceland)
          </a>
        </li>
        <li>
          <a
            href=' https://www.mossy.earth/projects/reforesting-iceland'
            className='text-blue-700'>
            Mossy Earth (Iceland)
          </a>
        </li>
        <li>
          <a
            href='https://landlifecompany.com/projects/iceland/'
            className='text-blue-700'>
            Land Live (Iceland)
          </a>
        </li>
        <li>
          <a href='https://treememberme.com' className='text-blue-700'>
            TreememberMe{' '}
          </a>
        </li>
      </ul>
    </div>
  );
}
