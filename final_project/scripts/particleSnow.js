Types = 
{
	snow :
		{
		positionStyle : Type.CUBE,
		positionBase : new THREE.Vector3( 0, 200, 0 ),
		positionSpread : new THREE.Vector3( 500, 0, 500 ),

		velocityStyle : Type.CUBE,
		velocityBase : new THREE.Vector3( 0, -60, 0 ),
		velocitySpread : new THREE.Vector3( 50, 20, 50 ),
		accelerationBase : new THREE.Vector3( 0, -10,0 ),

		angleBase : 0,
		angleSpread : 720,
		angleVelocityBase : 0,
		angleVelocitySpread : 60,

		particleTexture : THREE.ImageUtils.loadTexture( 'scripts/assets/textures/general/snowflake.png' ),

		sizeTween : new Tween( [0, 0.25], [1, 10] ),
		colorBase : new THREE.Vector3(0.66, 1.0, 0.9), 
		opacityTween : new Tween( [2, 3], [0.8, 0] ),

		particlesPerSecond : 500,
		particleDeathAge : 4.0,	
		emitterDeathAge : 60
		}
}