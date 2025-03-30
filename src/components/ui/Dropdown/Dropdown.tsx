import {
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  SelectedText,
  SelectedWrapper,
} from './Dropdown.styled';
import { useClickOutside } from '../../../hooks/useClickOutside';

export type DropItemType = { text: string; query: string | null };

type Props = {
  items: DropItemType[];
  selected: DropItemType | null;
  isOpen: boolean;
  onDropClick: () => void;
  onItemClick: (i: number) => void;
  onClose: () => void;
};

export const Dropdown = ({ items, selected, isOpen, onDropClick, onItemClick, onClose }: Props) => {
  const dropRef = useClickOutside<HTMLDivElement>(onClose);

  return (
    <DropdownContainer ref={dropRef} onClick={onDropClick}>
      <SelectedWrapper>
        <SelectedText>{!selected || !selected.query ? 'Sort by' : selected.text}</SelectedText>
        <DropdownList $isOpen={isOpen}>
          {items.map((item, i) =>
            item.query === selected?.query ? null : (
              <DropdownListItem key={i} onClick={() => onItemClick(i)}>
                <SelectedText>{item.text}</SelectedText>
              </DropdownListItem>
            )
          )}
        </DropdownList>
      </SelectedWrapper>
    </DropdownContainer>
  );
};
