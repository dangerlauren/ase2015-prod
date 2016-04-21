<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_news
 *
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
$n = 0;
?>
<p class="newscontrols"><a class="prev disabled" href="#newsnull">&lt;</a><a class="next" href="#newstwo">&gt;</a>
</p>
<div class="newsflash<?php echo $moduleclass_sfx; ?>">
	<?php foreach ($list as $item) : 
		$n++;
		switch ($n) {
			case 1 :
				$numclass = "newsone";
				break;
			case 2 :
				$numclass = "newstwo";
				break;
			case 3 :
				$numclass = "newsthree";
				break;
			default :
				$numclass = "flashitem";
				break;
			}			 
	?>
	
		<div class="<?php echo $numclass; ?>"><?php require JModuleHelper::getLayoutPath('mod_articles_news', '_item'); ?></div>
	<?php endforeach; ?>
</div>
