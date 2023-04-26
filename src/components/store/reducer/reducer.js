import {createStore } from 'redux';
const log = JSON.parse(window.localStorage.getItem("loggedPeople"));

const initialState = {
    usuario: log ? log.user : null,
    sesion: false,

    business: null,
    gettingBusiness: false,

    usuarioById: null,
    loadingUserById: false,

    factureToPayroll: null,
    loadingFactureToPayroll: false,

    // Inventary BOX
    loadingInventaryBox: false,
    inventaryBox: null,

    // BOX
    
    loadingBoxById: false,
    BoxById: null,

    // CARGAR PRODUCTO EN INVENTARIO

    loadingProductToShowInventary: false,
    productToShowInventary: null,
    activeModal: false,


    // Lista de stocks por fecha
    stocks: null,
    loadingStocks: false,

    // Producto espeficio para factura
    factureProduct: null,
    loadingFactureProduct: false,

    // PRODUCTO PARA VER DETALLES
    productoDetails: null,
    loadingProductoDetails: false,

    // Categorias para vender desde el business
    category: null,
    loadingCategory: false,

    // Categoría por id
    categoryById: null,
    loadingCategoryById: false,
    activeCatPr: false,

    // cargar producto en menu
    loadingProductToShowMenu: false,
    productToShowMenu: null,
    activeModalMenu: false,


    // SELLS
    loadingSells: false,
    sells: null,

    loadingSell: false,
    sell: null,
    activeGetSell:false,

    // ESTADISTICAS PARA SELL
    loadingEstadisticaSell: false,
    estadisticaSell: null,

    // --------------------------------------------------------------
    // ==============================================================
    // --------------------------------------------------------------
    // GASTOS

    // SERVICIOS 
    servicesAll: null,
    loadingServiceAll: false,
    // SERVICIOS POR MES
    services: null,
    loadingServices: false,

    service: null,
    loadingService:false,



    // --------------------------------------------------------------
    // ==============================================================
    // --------------------------------------------------------------


    // --------------------------------------------------------------
    // ==============================================================
    // --------------------------------------------------------------

    // ESTOS ESTADOS VAN DEL LADO DEL NEGOCIO
    mesasQR: null,
    loadingMESASQR: false,


    QR: null,
    loadingQR: false,


    
    // --------------------------------------------------------------
    // ==============================================================
    // --------------------------------------------------------------

    // Business principal
    // ESTOS ESTADOS VAN DEL LADO DEL CLIENTE

    storeP:null,
    loadingStore: false,

    // Producto watching
    productoQr:null,
    loadingProductoQR: false,

    // Mesa :
    mesa: null,
    loadingMesa: false





}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_TOKEN':
            return {
                ...state,
                usuario: action.payload
            }
        // CARGANDO EL NEGOCIO
        case 'GETTING_BUSINES_BY_ID':
            return{
                ...state,
                gettingBusiness: true
            }
        // CARGA EL NEGOCIO Y SU INFO POR ID
        case 'GET_BUSINESS_BYID':
            return {
                ...state,
                business: action.payload,
                gettingBusiness: false
            }

        // USUARIO Y SU ID ---------------------------
        case 'GETTING_PROFILE_BY_ID':
            return {
                ...state,
                loadingUserById: true
            }
        case 'GET_PROFILE_BY_ID':
            return {
                ...state,
                usuarioById: action.payload,
                loadingUserById: false
            }
        



        // OBTENER NOMINA DE USUARIO

        case 'PAYROLL_TO_PERSON':
            return {
                ...state,
                factureToPayroll: action.payload,
                loadingFactureToPayroll: false
            } 
        case 'GETTING_PAYROLL_TO_PERSON':
            return {
                ...state,
                loadingFactureToPayroll: true
            }





        // OBTENER INVENTARIO EL NEGOCIO
        case 'GET_INVENTARY_BOX':
            return {
                ...state,
                inventaryBox: action.payload
            }
            case 'GETTING_INVENTARY_BOX':
                return {
                    ...state,
                    loadingInventaryBox: true
                }

        // OBTENER CAJA
        case 'GET_BOX_BYID':
            return {
                ...state,
                BoxById: action.payload,
                loadingBoxById: false

            }
        case 'GETTING_BOX_BYID':
            return {
                ...state,
                loadingBoxById: true
            }

        // OBTENER UN PRODUCTO ESPECIFICO. 
        case 'ACTIVE_MODAL':
            return {
                ...state,
                activeModal: action.payload
            }
        case 'GETTING_PRODUCT_TO_SHOW_INVENTARY':
            return {
                ...state,
                loadingProductToShowInventary: true
            }
        case 'GET_PRODUCT_TO_SHOW_INVENTARY':
            return {
                ...state,
                productToShowInventary: action.payload,
                loadingProductToShowInventary: false
                
            }

        case 'GETTING_STOCK':
            return {
                ...state,
                loadingStocks: true
            }
        case 'GET_STOCK':
            return {
                ...state,
                stocks: action.payload,
                loadingStocks:false
            }


        // facture 
        case 'GETTING_FACTURE':
            return {
                ...state,
                loadingFactureProduct: true
            }
        case 'GET_FACTURE':
            return {
                ...state,
                factureProduct: action.payload,
                loadingFactureProduct:false
            }
 
        // PRODUCTO Y DETALLES 

        case 'GETTING_PRODUCTO':
            return {
                ...state,
                loadingFactureProduct: true
            }
        case 'GET_PRODUCTO_DETALLES':
            return {
                ...state,
                productoDetails: action.payload,
                loadingProductoDetails: false
            }


        // CARGAR CATEGORIAS PARA VENDER
            case 'GETTING_CATEGORY':
                return {
                    ...state,
                    loadingCategory: true
                }
            case 'GET_CATEGORY':
                return {
                    ...state,
                    category: action.payload,
                    loadingCategory: false
                }

        // CARGAR CATEGORIAS PARA VENDER DESDE el panel
        case 'GETTING_CATEGORY_BY_ID':
            return {
                ...state,
                loadingCategoryById: true
            }
        case 'GET_CATEGORY_BY_ID':
            return {
                ...state,
                categoryById: action.payload,
                loadingCategoryById: false
            }
 

        case 'ACTIVE_MODAL_MENU':
            return {
                ...state,
                activeModalMenu: action.payload
            }

        case 'GETTING_PRODUCTO_TO_SHOW_MENU':
            return {
                ...state,
                loadingProductToShowMenu: true,
            }

        case 'GET_PRODUCTO_TO_SHOW_MENU':
            return {
                ...state,
                productToShowMenu: action.payload,
                loadingProductToShowMenu: false

            }

        
        // VENTAS REGISTROS - BUSINESS
        case 'GETTING_SELLS':
            return {
                ...state,
                loadingSells: action.payload
            }
        case 'GET_SELLS':
            return {
                ...state,
                sells: action.payload,
                loadingSells:false
            }

        // OBTENER REGISTRO ESPECIFICO
        case 'ACTIVE_GET_SELL':
            return {
                ...state,
                activeGetSell: action.payload
            }
        case 'GETTING_SELL':
            return {
                ...state,
                loadingSell: action.payload
            }
        case 'GET_SELL':
            return {
                ...state,
                sell: action.payload,
                loadingSell: false
            }
        case 'GETTING_ESTADISTICAS_SELL':
            return {
                ...state,
                loadingEstadisticaSell: action.payload
            }
        case 'GET_ESTADISTICAS_SELL':
            return {
                ...state,
                estadisticaSell: action.payload
            }
        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------

        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------
        case 'GETTING_SERVICES_BY_MONTH':
            return {
                ...state,
                loadingServices: action.payload
            }
        
        case 'GET_SERVICES_BY_MONTH':
            return {
                ...state,
                services: action.payload,
                loadingServices: false
            }

        case 'GETTING_SERVICES':
            return {
                ...state,
                loadingServiceAll: action.payload
            }
        
        case 'GET_SERVICES':
            return {
                ...state,
                servicesAll: action.payload,
                loadingServiceAll: false
            }
        
        case 'GETTING_SERVICE':
            return {
                ...state,
                loadingService: action.payload
            }
        case 'GET_SERVICE':
            return {
                ...state,
                service: action.payload,
                loadingService: false
            }
        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------




        // GESTION DE PEDIDOS DESDE EL PANEL DE ADMINISTRACIÓN
        case 'GETTING_MESA':
            return {
                ...state,
                loadingMESASQR: action.payload,
            }
        
        case 'GET_MESAS':
            return {
                ...state,
                mesasQR: action.payload,
                loadingMESASQR: false,
            }
        
        case 'GETTING_QR_ESPECIFITY':
            return {
                ...state,
                loadingQR: action.payload
            }

        case 'GET_QR_ESPECIFITY':
            return {
                ...state,
                QR: action.payload,
                loadingQR: false
            }
        


        // ------------------------------------------------------------
        // ============================================================
        // ------------------------------------------------------------
        // BUSINESS PRINCIPAL
        case 'GETTING_STORE':
            return {
                ...state,
                loadingStore: true
            }
        
        case 'GET_STORE':
            return {
                ...state,
                storeP: action.payload,
                loadingStore: false
            }
        

        case 'GETTING_PRODUCTO_QR':
            return {
                ...state,
                loadingProductoQr: true,
                productoQr: null
            }
        case 'GET_PRODUCTO_QR':
            return {
                ...state,
                productoQr: action.payload,
                loadingProductoQR: false
            }
        
        // Cargando mesa y buscando disponibilidad.
        case 'LOADING_MESA':
            return {
                ...state,
                loadingMesa: action.payload
            }
        case 'MESA':
            return {
                ...state,
                mesa: action.payload,
                loadingMesa: false
            }
        default:
            return {...state}
    } 
}