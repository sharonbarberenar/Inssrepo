document.addEventListener("DOMContentLoaded", function() {
    // Inicializar Tabulator con filtros y columnas personalizadas
    const table = new Tabulator("#employeeTable", {
        data: data, // Datos cargados desde data.js
        layout: "fitColumns",
        responsiveLayout: "collapse",
        pagination: "local", // Paginación local
        paginationSize: 50, // Tamaño de la página
        paginationSizeSelector: [10, 25, 50, 100], // Opciones de paginación
        columns: [            
	    {title: "INSS", field: "INSS", headerFilter: "input"},
            {title: "Cedula", field: "CEDULA", headerFilter: "input"},
            {title: "Primer Nombre", field: "NOMBRE1", headerFilter: "input"},
            {title: "Segundo Nombre", field: "NOMBRE2", headerFilter: "input"},
            {title: "Primer Apellido", field: "APELLIDO1", headerFilter: "input"},
            {title: "Segundo Apellido", field: "APELLIDO2", headerFilter: "input"},
            {title: "Empresa", field: "EMPRESA", headerFilter: "input"},
            {
                title: "Accion",
                formatter: function() {
                    return `<i class="fas fa-search"></i>`;
                },
                align: "center",
                cellClick: function(e, cell) {
                    showDetails(cell.getRow().getData());
                }
            }
        ],
    });

function formatCurrency(value, prefix) {
    return prefix + Number(value || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showDetails(employee) {
    document.getElementById('modalDetails').innerHTML = `
        <p><strong>CEDULA:</strong> ${employee.CEDULA || ''}</p>
        <p><strong>PRIMER NOMBRE:</strong> ${employee.NOMBRE1 || ''}</p>
        <p><strong>SEGUNDO NOMBRE:</strong> ${employee.NOMBRE2 || ''}</p>
        <p><strong>PRIMER APELLIDO:</strong> ${employee.APELLIDO1 || ''}</p>
        <p><strong>SEGUNDO APELLIDO:</strong> ${employee.APELLIDO2 || ''}</p>
        <p><strong>INSS:</strong> ${employee.INSS || ''}</p>
        <p><strong>EMPRESA:</strong> ${employee.EMPRESA || ''}</p>
        <p><strong>SALARIO:</strong> ${formatCurrency(employee.SALARIO, 'C$ ')}</p>
        <p><strong>DOLAR:</strong> ${formatCurrency(employee.DOLAR, 'U$ ')}</p>
        <p><strong>EMPLEADOR:</strong> ${employee.EMPLEADOR || ''}</p>
        <p><strong>NOMINA:</strong> ${employee.NOMINA || ''}</p>
        <p><strong>DOMICILIO:</strong> ${employee.DOMICILIO_ASE || ''}</p>
        <p><strong>DOMICILIO EMPRESA:</strong> ${employee.DOMICILIO_EMP || ''}</p>
    `;
    $('#detailsModal').modal('show');
}

});
