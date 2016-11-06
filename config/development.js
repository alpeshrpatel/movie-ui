/**
 * Created by nhemke on 8/1/2016.
 */
'use strict';
module.exports = {
    api: {
        endpoints: {
            wis: {
                url: 'http://localhost:8080',
                school: {
                    create : {
                        path: '/wis/api/v1/school',
                        header: {
                            'content-type': 'application/json'
                        } 
                    },
                    update : {
                        path: '/wis/api/v1/school',
                        header: {
                            'content-type': 'application/json'
                        }
                    },
                    delete : {
                        path: '/wis/api/v1/school',
                        header: {
                            'content-type': 'application/json'
                        }
                    },
                    list : {
                        path: '/wis/api/v1/school/list',
                        header: {
                            'content-type': 'application/json'
                        }
                    },
                    get : {
                        path: '/wis/api/v1/school',
                        header: {
                            'content-type': 'application/json'
                        }
                    }
                }
            }
        }
    }
};