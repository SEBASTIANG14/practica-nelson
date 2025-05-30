import { MongoClient } from 'mongodb';
const uri = 'mongodb://0.0.0.0:27017,0.0.0.0:27018,0.0.0.0:27019/?replicaSet=rsBanco';
const client = new MongoClient(uri);

async function crearBD() {
  try {
    await client.connect();
    const db = client.db('banco_nexus');
    db.dropDatabase();

    const clientes = db.collection('clientes');
    const cuentas = db.collection('cuentas');
    const transacciones = db.collection('transacciones');

    const clientesData = [
      { nombre: 'Ana Ruiz', curp: 'RUAA900101MDFXXX01' },
      { nombre: 'Luis Pérez', curp: 'PELU850203HDFXXX02' },
      { nombre: 'Valeria Medina', curp: 'MEGV930710MDFXXX03' },
      { nombre: 'Jorge Ríos', curp: 'RIOJ780815HDFXXX04' },
      { nombre: 'Claudia Ortega', curp: 'ORGC820925MDFXXX05' },
      { nombre: 'Fernando Ayala', curp: 'AYAF870112HDFXXX06' },
      { nombre: 'Natalia Vela', curp: 'VELN950330MDFXXX07' },
      { nombre: 'Emilio Navarro', curp: 'NAVE720204HDFXXX08' },
      { nombre: 'Sofía Contreras', curp: 'CONC980418MDFXXX09' },
      { nombre: 'Raúl Serrano', curp: 'SERR760629HDFXXX10' }
    ];

    const cuentasData = [
      { cuenta: '100', cliente: 'RUAA900101MDFXXX01', saldo: 5000 },
      { cuenta: '101', cliente: 'PELU850203HDFXXX02', saldo: 7500 },
      { cuenta: '110', cliente: 'MEGV930710MDFXXX03', saldo: 8300 },
      { cuenta: '111', cliente: 'RIOJ780815HDFXXX04', saldo: 2900 },
      { cuenta: '112', cliente: 'ORGC820925MDFXXX05', saldo: 7100 },
      { cuenta: '113', cliente: 'AYAF870112HDFXXX06', saldo: 4050 },
      { cuenta: '114', cliente: 'VELN950330MDFXXX07', saldo: 9600 },
      { cuenta: '115', cliente: 'NAVE720204HDFXXX08', saldo: 5400 },
      { cuenta: '116', cliente: 'CONC980418MDFXXX09', saldo: 3100 },
      { cuenta: '117', cliente: 'SERR760629HDFXXX10', saldo: 6250 }
    ];

    const transaccionesData = [
      { cuenta: '100', sucursal: "chametla", tipo: 'deposito', monto: 1000, fecha: new Date('2025-05-01T10:00:00Z') },
      { cuenta: '101', sucursal: "chametla", tipo: 'retiro', monto: 500, fecha: new Date('2025-05-02T11:00:00Z') },
      { cuenta: '110', sucursal: "cdmx", tipo: 'deposito', monto: 1800, fecha: new Date('2025-05-03T12:30:00Z') },
      { cuenta: '111', sucursal: "constitucion", tipo: 'retiro', monto: 600, fecha: new Date('2025-05-04T09:45:00Z') },
      { cuenta: '112', sucursal: "torreon", tipo: 'deposito', monto: 2100, fecha: new Date('2025-05-05T14:15:00Z') },
      { cuenta: '113', sucursal: "centenario", tipo: 'retiro', monto: 900, fecha: new Date('2025-05-06T16:50:00Z') },
      { cuenta: '114', sucursal: "loscabos", tipo: 'deposito', monto: 1200, fecha: new Date('2025-05-07T08:30:00Z') },
      { cuenta: '115', sucursal: "cdmx", tipo: 'retiro', monto: 700, fecha: new Date('2025-05-08T17:20:00Z') },
      { cuenta: '116', sucursal: "culiacan", tipo: 'deposito', monto: 1400, fecha: new Date('2025-05-09T19:10:00Z') },
      { cuenta: '117', sucursal: "saltillo", tipo: 'retiro', monto: 1100, fecha: new Date('2025-05-10T13:40:00Z') }
    ];

    await clientes.insertMany(clientesData);
    await cuentas.insertMany(cuentasData);
    await transacciones.insertMany(transaccionesData);

    console.log('Base de datos creada con éxito.');
  } finally {
    await client.close();
  }
}

crearBD();
