<script lang="ts">
	import plus from '$lib/assets/web/favicon/others/plus.svg';
	import min from '$lib/assets/web/favicon/others/min.svg';
	import type { WikiTreeItem } from '$lib/typescript/content/wiki/wikiTree';

	type Props = {
		items: WikiTreeItem[];
		currentPath: string;
		buildHref: (href: string) => string;
	};

	let { items, currentPath, buildHref }: Props = $props();
	let collapsedItems = $state<Set<string>>(new Set());

	const normalizePath = (path: string) => path.replace(/\/+$/, '');

	function itemId(item: WikiTreeItem, indexPath: string) {
		return item.href ?? `${item.title}-${indexPath}`;
	}

	function isCurrentItem(item: WikiTreeItem) {
		return item.href ? normalizePath(currentPath) === normalizePath(buildHref(item.href)) : false;
	}

	function hasActiveDescendant(item: WikiTreeItem): boolean {
		return item.children?.some((child) => isCurrentItem(child) || hasActiveDescendant(child)) ?? false;
	}

	function isActiveBranch(item: WikiTreeItem) {
		return isCurrentItem(item) || hasActiveDescendant(item);
	}

	function isExpanded(item: WikiTreeItem, id: string) {
		return isActiveBranch(item) || !collapsedItems.has(id);
	}

	function toggleItem(id: string) {
		const nextCollapsedItems = new Set(collapsedItems);

		if (nextCollapsedItems.has(id)) {
			nextCollapsedItems.delete(id);
		} else {
			nextCollapsedItems.add(id);
		}

		collapsedItems = nextCollapsedItems;
	}
</script>

{#snippet renderItems(treeItems: WikiTreeItem[], depth = 0, parentPath = '')}
	<ul class:wiki-tree__list={depth === 0} class:wiki-tree__sublist={depth > 0}>
		{#each treeItems as item, index}
			{@const id = itemId(item, `${parentPath}-${index}`)}
			{@const hasChildren = Boolean(item.children?.length)}
			{@const active = isCurrentItem(item)}
			{@const activeBranch = isActiveBranch(item)}
			{@const expanded = hasChildren && isExpanded(item, id)}

			<li
				class="wiki-tree__item"
				class:wiki-tree__item--active={active}
				class:wiki-tree__item--open={activeBranch}
				style={`--wiki-tree-depth: ${depth};`}
			>
				<div class="wiki-tree__row">
					{#if item.href}
						<a
							class="wiki-tree__link"
							class:wiki-tree__link--active={active}
							href={buildHref(item.href)}
							aria-current={active ? 'page' : undefined}
						>
							<span class="wiki-tree__icon-slot">
								{#if item.icon}
									<img src={item.icon} alt="" class="icon wiki-tree__icon" />
								{/if}
							</span>
							<span class="wiki-tree__title">{item.title}</span>
						</a>
					{:else}
						<span class="wiki-tree__label">
							<span class="wiki-tree__icon-slot">
								{#if item.icon}
									<img src={item.icon} alt="" class="icon wiki-tree__icon" />
								{/if}
							</span>
							<span class="wiki-tree__title">{item.title}</span>
						</span>
					{/if}

					{#if hasChildren}
						<button
							class="wiki-tree__toggle"
							type="button"
							aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`}
							aria-expanded={expanded}
							onclick={() => toggleItem(id)}
						>
							<img src={expanded ? min : plus} alt="" class="icon wiki-tree__toggle-icon" />
						</button>
					{/if}
				</div>

				{#if hasChildren && expanded}
					{@render renderItems(item.children ?? [], depth + 1, id)}
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

{@render renderItems(items)}
