<?php
/**
 * @package     Joomla.Site
 * @subpackage  com_content
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::addIncludePath(JPATH_COMPONENT . '/helpers/html');

// Create some shortcuts.
$params    = &$this->item->params;
$n         = count($this->items);
$listOrder = $this->escape($this->state->get('list.ordering'));
$listDirn  = $this->escape($this->state->get('list.direction'));

// Check for at least one editable article
$isEditable = false;

if (!empty($this->items))
{
	foreach ($this->items as $article)
	{
		if ($article->params->get('access-edit'))
		{
			$isEditable = true;
			break;
		}
	}
}
?>

<?php if (empty($this->items)) : ?>

	<?php if ($this->params->get('show_no_articles', 1)) : ?>
	<p><?php echo JText::_('COM_CONTENT_NO_ARTICLES'); ?></p>
	<?php endif; ?>

<?php else : ?>


	<ul class="category list">

			<?php foreach ($this->items as $i => $article) : ?>
				<?php if ($this->items[$i]->state == 0) : ?>
				 <li class="system-unpublished cat-list-row<?php echo $i; ?>">
				<?php else: ?>
				<li class="cat-list<?php echo $i; ?>" >
				<?php endif; ?>
						<?php if (in_array($article->access, $this->user->getAuthorisedViewLevels())) : 
						$title = explode("(", $this->escape($article->title));
						?>
							<a href="<?php echo JRoute::_(ContentHelperRoute::getArticleRoute($article->slug, $article->catid, $article->language)); ?>">
								<?php echo $title[0]; ?>
							</a> <?php echo "(".$title[1]; ?>
						<?php else: ?>
							<?php
							echo $this->escape($article->title) . ' : ';
							$menu   = JFactory::getApplication()->getMenu();
							$active = $menu->getActive();
							$itemId = $active->id;
							$link   = new JUri(JRoute::_('index.php?option=com_users&view=login&Itemid=' . $itemId, false));
							$link->setVar('return', base64_encode(JRoute::_(ContentHelperRoute::getArticleRoute($article->slug, $article->catid, $article->language), false)));
							?>
							<a href="<?php echo $link; ?>" class="register">
								<?php echo JText::_('COM_CONTENT_REGISTER_TO_READ_MORE'); ?>
							</a>
						<?php endif; ?>
						</li>
			<?php endforeach; ?>
	</ul>
<?php endif; ?>

<?php // Code to add a link to submit an article. ?>
<?php if ($this->category->getParams()->get('access-create')) : ?>
	<?php echo JHtml::_('icon.create', $this->category, $this->category->params); ?>
<?php  endif; ?>

<?php // Add pagination links ?>
<?php if (!empty($this->items)) : ?>
	<?php if (($this->params->def('show_pagination', 2) == 1  || ($this->params->get('show_pagination') == 2)) && ($this->pagination->pagesTotal > 1)) : ?>
	<div class="pagination">

		<?php if ($this->params->def('show_pagination_results', 1)) : ?>
			<p class="counter pull-right">
				<?php echo $this->pagination->getPagesCounter(); ?>
			</p>
		<?php endif; ?>

		<?php echo $this->pagination->getPagesLinks(); ?>
	</div>
	<?php endif; ?>
<?php  endif; ?>
