import axios from 'axios';

// BUSINESS
export function gettingProfile(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_BUSINES_BY_ID',
        payload: true
    }
}
export function getProfileBusiness(business){ // Almacena los negocios
    return {
        type: 'GET_BUSINESS_BYID',
        payload: business
    }
}
// Funcion para atraer el negocio
export function AxiosGetInfoBusiness(id){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(gettingProfile());
        axios.get(`/business/`+id)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(getProfileBusiness(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(getProfileBusiness('notrequest'));
            }else{
                return dispatch(getProfileBusiness(404))
                
            }
        });
    }
}

// USUARIO A TRAVÉS DEL ID
export function gettingProfileById(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_PROFILE_BY_ID',
        payload: true
    }
}
export function getProfileById(business){ // Almacena los negocios
    return {
        type: 'GET_PROFILE_BY_ID',
        payload: business
        
    }
}
// Funcion para atraer el negocio
export function AxiosGetProfileById(id, business){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(gettingProfileById());
        axios.get(`/peopleById/${id}/${business}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(getProfileById(inf))
        })
        .catch(e => {
            return dispatch(getProfileById(404))
        });
    }
}



// Factura para pagar la nómina. 


// USUARIO A TRAVÉS DEL ID
export function GettingfactureToPayroll(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_PAYROLL_TO_PERSON',
        payload: true
    }
}
export function factureToPayroll(person){ // Almacena los negocios
    return {
        type: 'PAYROLL_TO_PERSON',
        payload: person
        
    } 
}
// Funcion para atraer el negocio
export function AxiosfactureToPayroll(id, business, dayPay){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GettingfactureToPayroll());
        axios.get(`/movement/${id}/${business}/${dayPay}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(factureToPayroll(inf))
        })
        .catch(e => {
            return dispatch(factureToPayroll(404))
        });
    }
}




// OBTENER CAJAS DE INVENTARIO


// USUARIO A TRAVÉS DEL ID
export function gettinInventaryBox(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_INVENTARY_BOX',
        payload: true
    }
}
export function getInventaryBox(person){ // Almacena los negocios
    return {
        type: 'GET_INVENTARY_BOX',
        payload: person
        
    } 
}
// Funcion obtener las cajas por api
export function AxiosGetInventaryBox(business){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GettingfactureToPayroll());
        axios.get(`/inventary/${business}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(getInventaryBox(inf))
        })
        .catch(e => {
            if(e.request){
                return dispatch(getInventaryBox('request'))
            }else if(e.response.status == 404){
                return dispatch(getInventaryBox(404))
            }
        });
    }
}


// OBTENER CAJA DE INVENTARIO POR ID


// USUARIO A TRAVÉS DEL ID
export function gettingBoxByID(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_BOX_BYID',
        payload: true
    }
}
export function getBoxByID(person){ // Almacena los negocios
    return {
        type: 'GET_BOX_BYID',
        payload: person
        
    } 
}
// Funcion obtener las cajas por api
export function AxiosGetBoxById(business, name){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(gettingBoxByID());
        axios.get(`/inventary/${business}/${name}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(getBoxByID(inf))
        })
        .catch(e => {
            if(e.request){
                return dispatch(getBoxByID('request'))
            }else if(e.response.status == 404){
                return dispatch(getBoxByID(404))
            }
        });
    }
}


// Función para mostrar producto!

// PRODUCTO A TRAVÉS DEL UR
export function GETTING_PRODUCT_TO_SHOW_INVENTARY(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_PRODUCT_TO_SHOW_INVENTARY',
        payload: true
    }
}
export function GET_PRODUCT_TO_SHOW_INVENTARY(pr){ // Almacena los negocios
    return {
        type: 'GET_PRODUCT_TO_SHOW_INVENTARY',
        payload: pr
        
    } 
}
export function ActiveModalProductoToShow(state){
    return {
        type: 'ACTIVE_MODAL',
        payload: state
    }
}
// Funcion obtener las cajas por api
export function ShowGetProductToInventaryModal(producto){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(ActiveModalProductoToShow(true))
        dispatch(GETTING_PRODUCT_TO_SHOW_INVENTARY());
        return dispatch(GET_PRODUCT_TO_SHOW_INVENTARY(producto))
   
    }
}

// FUNCIONES PARA MOSTRAR EL STOCK

// STOCK A TRAVÉS DEL UR
export function GETTING_STOCK(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_STOCK',
        payload: true
    }
}
export function GET_STOCK(stock){ // Almacena los negocios
    return {
        type: 'GET_STOCK',
        payload: stock
        
    } 
}

// Funcion obtener las stocks completas por api
export function AxiosGetStock(business, year, month){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GETTING_STOCK());
        axios.get(`/stock/${business}/${year}/${month}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(GET_STOCK(inf))
        })
        .catch(e => {
            if(e.request){
                return dispatch(GET_STOCK('request'))
            }else if(e.response.status == 404){
                return dispatch(GET_STOCK(404))
            }
        });
    }
}



// Obtener info para la factura por inventario
// PRODUCTO A TRAVÉS DEL UR
export function GETTING_FACTURE(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_FACTURE',
        payload: true
    }
}
export function GET_FACTURE(pr){ // Almacena los negocios
    return {
        type: 'GET_FACTURE',
        payload: pr
        
    } 
}
// Funcion obtener las cajas por api
export function ShowGetFacture(producto){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GETTING_FACTURE());
        return dispatch(GET_FACTURE(producto))
   
    }
}











// FUNCIONES PARA MOSTRAR PRODUCTO Y SUS DETALLES O ESTADISTICAS

// STOCK A TRAVÉS DEL UR
export function GETTING_PRODUCTO(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_PRODUCTO',
        payload: true
    }
}
export function GET_PRODUCTO(producto){ // Almacena los negocios
    return {
        type: 'GET_PRODUCTO_DETALLES',
        payload: producto
        
    } 
}

// Funcion obtener las stocks completas por api
export function AxiosGetProducto(id){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GETTING_PRODUCTO());
        axios.get(`/producto/${id}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(GET_PRODUCTO(inf))
        })
        .catch(e => {
            console.log(e);
            if(e.response.status == 404){
                return dispatch(GET_PRODUCTO(404))
            } else if(e.request){
                return dispatch(GET_PRODUCTO('request'))

            }
        });
    }
}



// Función para obtener las categorías
export function GETTING_CATEGORIES(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_CATEGORY',
        payload: true
    }
}
export function GET_CATEGORIES(lista){ // Almacena los negocios
    return {
        type: 'GET_CATEGORY',
        payload: lista
        
    } 
}

// Funcion obtener las stocks completas por api
export function AxiosGetCategories(id){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GETTING_CATEGORIES());
        axios.get(`/categories/${id}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(GET_CATEGORIES(inf))
        })
        .catch(e => {
            return dispatch(GET_CATEGORIES(404))
        });
    }
}



// Obtener categoría especifica por id
export function GETTING_CATEGORIES_BY_ID(){ // Cargando categoría especifica
    return {
        type: 'GETTING_CATEGORY_BY_ID',
        payload: true
    }
}
export function GET_CATEGORIES_BY_ID(lista){ // Obtengo la categoría por id
    return {
        type: 'GET_CATEGORY_BY_ID',
        payload: lista
        
    } 
}

// Funcion obtener las stocks completas por api
export function AxiosGetCategoryByID(name,id){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(GETTING_CATEGORIES_BY_ID());
        axios.get(`/category/${name}/${id}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(GET_CATEGORIES_BY_ID(inf))
        })
        .catch(e => {
            return dispatch(GET_CATEGORIES_BY_ID(404))
        });
    }
}


// ------------------------------------------------------------------------------------------

// PRODUCTO A TRAVÉS DEL UR
export function GETTING_PRODUCTO_TO_SHOW_MENU(){ // Cambia al solicitar un negocio
    return {
        type: 'GETTING_PRODUCTO_TO_SHOW_MENU',
        payload: true
    }
}
export function GET_PRODUCTO_TO_SHOW_MENU(pr){ // Almacena los negocios
    return {
        type: 'GET_PRODUCTO_TO_SHOW_MENU',
        payload: pr
        
    } 
}
export function ActiveModalProductoToShowMenu(state){
    return {
        type: 'ACTIVE_MODAL_MENU',
        payload: state
    }
}
// Funcion obtener las cajas por api
export function ShowGetProductToMenuModal(producto){ // Enlace para las peticiones
    return function(dispatch){
        dispatch(ActiveModalProductoToShowMenu(true))
        dispatch(GETTING_PRODUCTO_TO_SHOW_MENU());
        return dispatch(GET_PRODUCTO_TO_SHOW_MENU(producto))
   
    }
}




        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------
        // SELLS
        
        export function GETTING_SELLS(valor){
            return {
                type: 'GETTING_SELLS',
                payload: valor
            }
        }
        export function GET_SELLS(info){
            return {
                type: 'GET_SELLS',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetSells(business, date, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_SELLS(carga));
                axios.get(`/car/business/${business}/${date}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_SELLS(inf))
                })
                .catch(e => {
                    if(e.request){
                        return dispatch(GET_SELLS('request'))
                    }else if(e.response.status == 404){
                        return dispatch(GET_SELLS(404));
                    }
                });
            }
        }


        // PRODUCTO A TRAVÉS DEL UR
        export function GETTING_SELL(){ // Cambia al solicitar un negocio
            return {
                type: 'GETTING_SELL',
                payload: true
            }
        }
        export function GET_SELL(inf){ // Almacena los negocios
            return {
                type: 'GET_SELL',
                payload: inf
                
            } 
        }
        export function ActiveGetSell(state){
            return {
                type: 'ACTIVE_GET_SELL',
                payload: state,
            }
        }
        // Funcion obtener la información de la venta
        export function ShowGetSell(info){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(ActiveGetSell(true))
                dispatch(GETTING_SELL());
                return dispatch(GET_SELL(info))
        
            }
        }

        // ESTADISTICA

        export function GETTING_ESTADISTICA_SELLS(valor){
            return {
                type: 'GETTING_ESTADISTICAS_SELL',
                payload: valor
            }
        }
        export function GET_ESTADISTICA_SELLS(info){
            return {
                type: 'GET_ESTADISTICAS_SELL',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetEstadisticaSells(business, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_ESTADISTICA_SELLS(carga));
                axios.get(`/car/buss/get/${business}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_ESTADISTICA_SELLS(inf))
                })
                .catch(e => {
                    if(e.request){
                        return dispatch(GET_ESTADISTICA_SELLS('request'))
                    }else if(e.response.status == 404){
                        return dispatch(GET_ESTADISTICA_SELLS(404))
                    }
                });
            }
        }


        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------
        // GASTOS 
        // SERVICIOS

        export function GETTING_SERVICES(valor){
            return {
                type: 'GETTING_SERVICES',
                payload: valor
            }
        }
        export function GET_SERVICES(info){
            return {
                type: 'GET_SERVICES',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetServices(business, date, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_SERVICES(carga));
                axios.get(`/gastos/services/${business}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_SERVICES(inf))
                })
                .catch(e => {
                    if(e.request){
                        return dispatch(GET_SERVICES('request'))
                    }
                });
            }
        }

        // SERVICIO ESPECIFICO
        export function GETTING_SERVICE(valor){
            return {
                type: 'GETTING_SERVICE',
                payload: valor
            }
        }
        export function GET_SERVICE(info){
            return {
                type: 'GET_SERVICE',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function axiosGetService(business, service, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_SERVICE(carga));
                axios.get(`/gastos/services/${business}/${service}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_SERVICE(inf))
                })
                .catch(e => {
                    return dispatch(GET_SERVICE(404))
                });
            }
        }
        // SERVICIOS POR MES

        export function GETTING_SERVICES_BY_MONTH(valor){
            return {
                type: 'GETTING_SERVICES_BY_MONTH',
                payload: valor
            }
        }
        export function GET_SERVICES_BY_MONTH(info){
            return {
                type: 'GET_SERVICES_BY_MONTH',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetServicesPay(business, date, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_SERVICES_BY_MONTH(carga));
                axios.get(`/gastos/services/filter/${business}/${date}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_SERVICES_BY_MONTH(inf))
                })
                .catch(e => {
                    return dispatch(GET_SERVICES_BY_MONTH(404))
                });
            }
        }

        


        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------
        
        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------

        







        
        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------

        export function GETTING_MESAS(valor){
            return {
                type: 'GETTING_MESAS',
                payload: valor
            }
        }
        export function GET_MESAS(info){
            return {
                type: 'GET_MESAS',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetMesasBusiness(business, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_MESAS(carga));
                axios.get(`/qr/${business}/`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_MESAS(inf))
                })
                .catch(e => {
                    return dispatch(GET_MESAS(404))
                });
            }
        }



        export function GETTING_QR(valor){
            return {
                type: 'GETTING_QR_ESPECIFITY',
                payload: valor
            }
        }
        export function GET_QR(info){
            return {
                type: 'GET_QR_ESPECIFITY',
                payload: info
            }
        }
        // Funcion obtener las mesas completas por api
        export function AxiosGetEspecifityQR(business, reference, carga){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_QR(carga));
                axios.get(`/qr/${business}/${reference}/`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_QR(inf))
                })
                .catch(e => {
                    return dispatch(GET_QR(404))
                });
            }
        }







        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------

        // Obtener business para vender

        export function GETTING_STORE(){ // Cargando categoría especifica
            return {
                type: 'GETTING_STORE',
                payload: true
            }
        }
        export function GET_STORE(st){ // Obtengo la categoría por id
            return {
                type: 'GET_STORE',
                payload: st
                
            } 
        }
        
        // Funcion obtener las stocks completas por api
        export function AxiosGetStoreByName(name){ // Enlace para las peticiones
            return function(dispatch){
                dispatch(GETTING_STORE());
                axios.get(`/QRP/${name}`)
                .then((info) => info.data)
                .then(inf => {
                    console.log(inf);
                    return dispatch(GET_STORE(inf))
                })
                .catch(e => {
                    return dispatch(GET_STORE(404))
                });
            }
        }


export function GETTING_PRODUCTO_QR(){
    return {
        type: 'GETTING_PRODUCTO_QR',
        payload:true
    }
}
export function GET_PRODUCTO_QR(producto){
    return {
        type: 'GET_PRODUCTO_QR',
        payload:producto
    }
}
export function AxiosGetProductoQR(product){
    return function(dispatch){
        dispatch(GETTING_PRODUCTO_QR());
        return dispatch(GET_PRODUCTO_QR(product));
    }
}

// Cargar mesa
export function GETTING_MESA(valor){
    return {
        type: 'LOADING_MESA',
        payload: valor
    }
}
export function GET_MESA(mesa){
    return {
        type: 'MESA',
        payload: mesa
    }
} 
export function AxiosGetMesa(business, reference, loading){
    return function(dispatch){
        dispatch(GETTING_MESA(loading));
        axios.get(`/QR/${business}/${reference}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(GET_MESA(inf))
        })
        .catch(e => {
            return dispatch(GET_MESA(404))
        });
    }
}




