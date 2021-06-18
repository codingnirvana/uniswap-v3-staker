async function main() {
    const stakerFactory = await ethers.getContractFactory("UniswapV3Staker");
    const staker = (await stakerFactory.deploy(
     	 "0x1F98431c8aD98523631AE4a59f267346ea31F984",
	"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        2 ** 32,
        2 ** 32
    ))

    console.log("UniswapV3 Staker deployed to:", staker.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
