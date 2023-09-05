import { useState } from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { useCreateHome } from './useCreateHome';

const Wrapper = styled.div`
  max-width: 48rem;
`;

function CreateListingForm() {
  const { createHome, isCreating } = useCreateHome();
  const { register, handleSubmit, formState, reset } = useForm();
  const [offer, setOffer] = useState(true);
  const { errors } = formState;

  function onSubmit(data) {
    const newData = {
      ...data,
      num_bedrooms: Number(data.num_bedrooms),
      num_bathrooms: Number(data.num_bathrooms),
      regular_price: Number(data.regular_price),
      discount: offer ? Number(data.discount) : null,
      has_parking_spot: JSON.parse(data.has_parking_spot),
      is_furnished: JSON.parse(data.is_furnished),
      offer,
    };
    createHome(newData, {
      onSettled: () => {
        reset();
        setOffer(true);
      },
    });
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name" error={errors?.name?.message}>
          <Input
            id="name"
            disabled={isCreating}
            error={errors?.name?.message}
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </FormRow>
        <FormRow label="Type">
          <Input
            id="type"
            disabled={isCreating}
            as="select"
            {...register('type')}
          >
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </Input>
        </FormRow>
        <FormRow label="Bedrooms" error={errors?.num_bedrooms?.message}>
          <Input
            type="number"
            id="numBedrooms"
            disabled={isCreating}
            defaultValue={1}
            error={errors?.num_bedrooms?.message}
            {...register('num_bedrooms', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Home should have at least 1 bedroom',
              },
            })}
          />
        </FormRow>
        <FormRow label="Bathrooms" error={errors?.num_bathrooms?.message}>
          <Input
            type="number"
            id="numBathrooms"
            disabled={isCreating}
            defaultValue={1}
            error={errors?.num_bathrooms?.message}
            {...register('num_bathrooms', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Home should have at least 1 bathroom',
              },
            })}
          />
        </FormRow>
        <FormRow label="Parking spot">
          <Input
            id="parking-spot"
            disabled={isCreating}
            as="select"
            {...register('has_parking_spot')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormRow>
        <FormRow label="Furnished">
          <Input
            id="furnished"
            disabled={isCreating}
            as="select"
            {...register('is_furnished')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormRow>
        <FormRow label="Address" error={errors?.address?.message}>
          <Input
            id="address"
            disabled={isCreating}
            error={errors?.address?.message}
            {...register('address')}
          />
        </FormRow>
        <FormRow label="Offer">
          <Input
            id="offer"
            disabled={isCreating}
            as="select"
            value={offer}
            onChange={(e) => setOffer(e.target.value === 'true')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormRow>
        <FormRow label="Regular Price" error={errors?.regular_price?.message}>
          <Input
            type="number"
            id="regularPrice"
            disabled={isCreating}
            defaultValue={0}
            error={errors?.regular_price?.message}
            {...register('regular_price', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Price should be at least $1',
              },
            })}
          />
        </FormRow>
        {offer && (
          <FormRow label="Discount" error={errors?.discount?.message}>
            <Input
              type="number"
              id="discount"
              disabled={isCreating}
              defaultValue={0}
              error={errors?.discount?.message}
              {...register('discount', {
                required: 'This field is required',
                min: {
                  value: 1,
                  message: 'Discount should be at least $1',
                },
              })}
            />
          </FormRow>
        )}
        <FormRow label="Images (max 6)" error={errors?.images?.message}>
          <FileInput
            id="images"
            disabled={isCreating}
            accept="image/*"
            multiple
            {...register('images', {
              required: 'Please select at least 1 image',
            })}
          />
        </FormRow>
        <Button disabled={isCreating}>Create Listing</Button>
      </Form>
    </Wrapper>
  );
}

export default CreateListingForm;
