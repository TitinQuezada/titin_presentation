import React from 'react';
import PaginationComponent from '../../pagination/PaginationComponent';
import './LanguajesTable.css';

const LanguajesTable = ({ className }) => {
  const languajes = [
    {
      id: 1,
      name: 'C#',
      level: 80,
      image:
        'data:image/jpeg;base64,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',
    },

    {
      id: 2,
      name: 'JavaScript',
      level: 70,
      image:
        'data:image/png;base64,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',
    },

    {
      id: 3,
      name: 'Java',
      level: 69,
      image:
        'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'Dart',
      level: 80,
      image:
        'data:image/png;base64,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',
    },
  ];

  const getPage = (page) => {
    console.log(`obteniendo datos de la pagina ${page}`);
  };

  return (
    <React.Fragment>
      <div className={`row ${className}`}>
        <div className='col-6'>
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Buscar' />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary'>
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <button className='btn btn-outline-primary btn-block'>Agregar</button>
        </div>

        <div className='col-12'>
          <table className='table table-sm'>
            <thead>
              <tr className='bg-primary text-white'>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {languajes.map((languaje) => (
                <tr key={languaje.id}>
                  <td className='vertical-aling-center'>{languaje.name}</td>
                  <td className='vertical-aling-center'>
                    <img
                      height='50vh'
                      width='50vh'
                      src={languaje.image}
                      alt={`${languaje.name}`}
                    />
                  </td>
                  <td className='vertical-aling-center'>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-outline-info mr-3'>
                          <i className='far fa-edit'></i>
                        </button>

                        <button className='btn btn-outline-danger'>
                          <i className='far fa-trash-alt'></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PaginationComponent
        pagesNumber={10}
        registerPerPage={10}
        onChange={getPage}
      />
    </React.Fragment>
  );
};

export default LanguajesTable;
