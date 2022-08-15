export const isSingalPermissionsAvailable = (permissions) =>
    JSON.parse(localStorage.getItem("user"))?.Role?.RolePermissions.some((data) => data.Menu.menu_value == permissions);
