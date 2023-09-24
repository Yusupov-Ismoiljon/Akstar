import { Checkbox, Select } from '@material-tailwind/react'
import React from 'react'

const MainLayouts = ({ menuKatal, setMenuKatal, sozlash, setSozlash }) => {
  return (
    <div>
      {sozlash && (
          <div className="space-y-[30px]">
            <div className="space-y-4">
              <span className="font-bold text-lg leading-normal block brend">Разедл</span>
              <ul>
                <li>
                  <Checkbox id="гитары" label="Гитары" color="blue" vripple={false} />
                </li>
                <li>
                  <Checkbox id="таб" label="Табы" color="blue" vripple={false} />
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <span className="font-bold text-lg leading-normal block brend">Тип</span>
              <ul>
                <li>
                  <Checkbox id="аку" label="Акустические гитары" color="blue" vripple={false} />
                </li>
                <li>
                  <Checkbox id="зле" label="Электрогитары" color="blue" vripple={false} />
                </li>
                <li>
                  <Checkbox id="уси" label="Усилители для гитар" color="blue" vripple={false} />
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <span className="font-bold text-lg leading-normal block brend">Цена</span>
              <div className="flex items-center space-x-2.5">
                <input
                  className="flex justify-center items-center w-[112px] border-2 border-black rounded-lg py-1 px-2.5"
                  type="number"
                />
                <i className="fa-solid fa-minus brend fa-2xl"></i>
                <input
                  className="flex justify-center items-center w-[112px] border-2 border-black rounded-lg py-1 px-2.5"
                  type="number"
                />
                <span className="font-semibold text-lg leading-normal">₽</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="font-bold text-lg leading-normal block brend">Тип</span>
              <ul>
                <li>
                  <Checkbox id="cort" label="Cort" color="blue" vripple={false} />
                </li>
                <li>
                  <Checkbox id="ortega" label="Ortega" color="blue" vripple={false} />
                </li>
                <li>
                  <Checkbox id="kremona" label="Kremona" color="blue" vripple={false} />
                </li>
              </ul>
            </div>
            <button className="w-full font-semibold text-base leading-6 text-white rounded-xl py-3 px-9 bg-[#1B37A3]">
              Применить фильтр
            </button>
          </div>
      )}
    </div>
  )
}

export default MainLayouts