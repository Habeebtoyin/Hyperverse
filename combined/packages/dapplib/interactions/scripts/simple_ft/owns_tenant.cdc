import SimpleFT from "../../../contracts/Project/SimpleFT.cdc"

pub fun main(tenantOwner: Address): String {
    let TenantPackage = getAccount(tenantOwner).getCapability(SimpleFT.PackagePublicPath)
                                .borrow<&SimpleFT.Package{SimpleFT.PackagePublic}>()
                                ?? panic("Could not borrow the public SimpleNFT.Package")
    let TenantID = tenantOwner.toString().concat(".").concat(TenantPackage.uuid.toString())
    return tenantOwner.toString().concat(".").concat(TenantPackage.uuid.toString())
}